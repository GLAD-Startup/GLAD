import { NextResponse } from 'next/server';

// TODO: Replace stub with live Resend / Webhook email delivery endpoint
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[Contact API] Received client enquiry:', body);

    // Basic server-side guard
    if (!body.name || !body.email || !body.description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry received. The GLAD Studio team will reply within 24 hours.',
    });
  } catch (err) {
    console.error('[Contact API] Error processing enquiry:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
