import sitemap from '@/app/sitemap';

export const INDEXNOW_KEY = '6207c46ad5e84f97c3963b6d79da7b0f';
export const INDEXNOW_HOST = 'gladstudio.net';
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export interface IndexNowResult {
  success: boolean;
  status: number;
  statusText: string;
  message: string;
  urlCount: number;
  urls: string[];
  endpoint: string;
}

/**
 * Validates and sanitizes URLs to ensure they strictly belong to the canonical apex domain:
 * https://gladstudio.net
 */
export function validateIndexNowUrls(urls: string[]): string[] {
  const allowedPrefix = `https://${INDEXNOW_HOST}`;
  const validUrls = new Set<string>();

  for (const url of urls) {
    if (typeof url !== 'string') continue;
    const trimmed = url.trim();

    // Strictly enforce https://gladstudio.net (no http, no www, no external domains)
    if (trimmed === allowedPrefix || trimmed.startsWith(`${allowedPrefix}/`)) {
      // Exclude API routes, private routes, or file extensions that shouldn't be indexed
      if (
        !trimmed.includes('/api/') &&
        !trimmed.includes('/_next/') &&
        !trimmed.endsWith('.map')
      ) {
        validUrls.add(trimmed);
      }
    }
  }

  return Array.from(validUrls);
}

/**
 * Retrieves the genuine canonical URL list directly from the existing sitemap implementation.
 */
export function getCanonicalUrlsFromSitemap(): string[] {
  const sitemapEntries = sitemap();
  const rawUrls = sitemapEntries.map((entry) => entry.url);
  return validateIndexNowUrls(rawUrls);
}

/**
 * Submits the canonical URLs (or custom validated URLs) to IndexNow via HTTP POST.
 * Fully error-handled so failures never throw or disrupt application runtime.
 */
export async function submitToIndexNow(
  urlsToSubmit?: string[]
): Promise<IndexNowResult> {
  const candidateUrls =
    urlsToSubmit && urlsToSubmit.length > 0
      ? urlsToSubmit
      : getCanonicalUrlsFromSitemap();

  const validatedUrls = validateIndexNowUrls(candidateUrls);

  if (validatedUrls.length === 0) {
    return {
      success: false,
      status: 400,
      statusText: 'Bad Request',
      message: 'No valid canonical URLs for https://gladstudio.net were found to submit.',
      urlCount: 0,
      urls: [],
      endpoint: INDEXNOW_ENDPOINT,
    };
  }

  const payload: IndexNowPayload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: validatedUrls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    const isSuccess = response.status === 200 || response.status === 202;

    let message = `IndexNow responded with HTTP ${response.status} ${response.statusText}.`;
    if (response.status === 200) {
      message = 'IndexNow: URLs submitted successfully (HTTP 200).';
    } else if (response.status === 202) {
      message =
        'IndexNow: URLs accepted and queued for indexing (HTTP 202). Key will be verified from keyLocation.';
    } else if (response.status === 403) {
      message =
        'IndexNow: Key verification failed or key not yet reachable at keyLocation (HTTP 403 Forbidden). Ensure key file is deployed to production.';
    } else if (response.status === 422) {
      message =
        'IndexNow: Unprocessable Entity (HTTP 422). URLs do not belong to host or key format invalid.';
    }

    if (responseText && responseText.trim().length > 0) {
      message += ` Response body: ${responseText.trim()}`;
    }

    return {
      success: isSuccess,
      status: response.status,
      statusText: response.statusText,
      message,
      urlCount: validatedUrls.length,
      urls: validatedUrls,
      endpoint: INDEXNOW_ENDPOINT,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown network error';
    return {
      success: false,
      status: 0,
      statusText: 'Network Error',
      message: `Failed to connect to IndexNow endpoint (${INDEXNOW_ENDPOINT}): ${errorMessage}`,
      urlCount: validatedUrls.length,
      urls: validatedUrls,
      endpoint: INDEXNOW_ENDPOINT,
    };
  }
}
