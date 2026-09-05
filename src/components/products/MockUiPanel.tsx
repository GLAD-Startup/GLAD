'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Lock,
  UserCheck,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Smartphone,
  Building2,
  ArrowRight,
  Calculator,
} from 'lucide-react';

export interface MockUiPanelProps {
  variant:
    | 'hms-grid'
    | 'hms-checkin'
    | 'hms-housekeeping'
    | 'hms-billing'
    | 'hms-cascade'
    | 'settledesk-simulator'
    | 'settledesk-admin'
    | 'settledesk-ledger'
    | 'settledesk-agent'
    | 'settledesk-cascade';
  className?: string;
}

export default function MockUiPanel({ variant, className }: MockUiPanelProps) {
  // Simulator state for SettleDesk deal split calculation
  const [dealPrice, setDealPrice] = useState<number>(1250000);
  const [commissionRate, setCommissionRate] = useState<number>(3.0);
  const [agentSplitTier, setAgentSplitTier] = useState<'80_20' | '70_30' | '90_10'>('80_20');

  const grossCommission = Math.round(dealPrice * (commissionRate / 100));
  const splitRatio = agentSplitTier === '90_10' ? 0.9 : agentSplitTier === '80_20' ? 0.8 : 0.7;
  const agentEarnings = Math.round(grossCommission * splitRatio);
  const brokerageEarnings = Math.round(grossCommission * (1 - splitRatio));

  return (
    <div
      aria-hidden="true"
      className={clsx(
        'w-full bg-surface border border-line-solid rounded-[12px] p-[20px] select-none text-fg overflow-hidden flex flex-col justify-between shadow-[0_12px_32px_-16px_rgba(10,10,11,0.12)]',
        className
      )}
    >
      {/* 1. HMS: Room Grid (PostgreSQL Row Locks) */}
      {variant === 'hms-grid' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">PostgreSQL Concurrency Grid</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              ROW-LOCK ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 [font-variant-numeric:tabular-nums]">
            <div className="p-3 rounded-[8px] border border-line bg-bg/70 space-y-1">
              <div className="text-[13px] font-medium text-fg">Suite #301</div>
              <div className="text-[11.5px] text-fg-muted">Deluxe King</div>
              <span className="inline-block text-[9.5px] font-medium px-1.5 py-0.5 rounded bg-[rgba(10,10,11,0.06)] text-fg-muted uppercase">
                OCCUPIED
              </span>
            </div>
            <div className="p-3 rounded-[8px] border border-accent/40 bg-accent/[0.06] space-y-1">
              <div className="text-[13px] font-medium text-fg">Room #302</div>
              <div className="text-[11.5px] text-fg-muted">Exec Double</div>
              <span className="inline-block text-[9.5px] font-medium px-1.5 py-0.5 rounded bg-accent/15 text-accent uppercase">
                ROW LOCKED
              </span>
            </div>
            <div className="p-3 rounded-[8px] border border-line bg-bg/70 space-y-1">
              <div className="text-[13px] font-medium text-fg">Room #303</div>
              <div className="text-[11.5px] text-fg-muted">Standard Twin</div>
              <span className="inline-block text-[9.5px] font-medium px-1.5 py-0.5 rounded bg-[rgba(10,10,11,0.06)] text-fg uppercase">
                AVAILABLE
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>Isolation: SELECT ... FOR UPDATE</span>
            <span className="text-accent font-medium">100% Double-Booking Proof</span>
          </div>
        </div>
      )}

      {/* 2. HMS: Front Desk Check-In Console */}
      {variant === 'hms-checkin' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Front Desk Check-In Console</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              FOLIO INITIALIZED
            </span>
          </div>

          <div className="p-3.5 rounded-[8px] border border-line bg-bg/70 space-y-2 [font-variant-numeric:tabular-nums]">
            <div className="flex justify-between items-center text-[13px]">
              <span className="font-medium text-fg">Guest: Dr. Priya Sharma</span>
              <span className="text-[11.5px] text-fg-muted font-mono">#BK-7842</span>
            </div>
            <div className="text-[12px] text-fg-muted">
              Stay: 19 Aug 2026 – 22 Aug 2026 (3 Nights) · Room 405
            </div>
            <div className="flex items-center gap-1.5 pt-1 text-[11.5px] text-accent">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Govt ID Verified · Digital Key Dispatched</span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>Billing: Corporate Account</span>
            <span className="text-fg font-medium">₹0.00 Balance Pending</span>
          </div>
        </div>
      )}

      {/* 3. HMS: Mobile Housekeeping Board */}
      {variant === 'hms-housekeeping' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Mobile Housekeeping Board</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              PRIORITY QUEUE
            </span>
          </div>

          <div className="space-y-2 [font-variant-numeric:tabular-nums]">
            <div className="p-3 rounded-[8px] border border-line bg-bg/70 flex items-center justify-between">
              <div>
                <div className="text-[12.5px] font-medium text-fg">Room 204 — Same Day Arrival</div>
                <div className="text-[11.5px] text-fg-muted">Assigned: Sunita K. · Urgent (2:00 PM)</div>
              </div>
              <span className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">
                CLEANING
              </span>
            </div>

            <div className="p-3 rounded-[8px] border border-line bg-bg/70 flex items-center justify-between">
              <div>
                <div className="text-[12.5px] font-medium text-fg">Room 301 — Turnover Complete</div>
                <div className="text-[11.5px] text-fg-muted">Inspected by Supervisor · Clean</div>
              </div>
              <span className="text-[10px] font-medium text-fg bg-[rgba(10,10,11,0.06)] px-2 py-0.5 rounded uppercase">
                READY ✓
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>Front desk state synced</span>
            <span className="text-accent font-medium">0s Latency</span>
          </div>
        </div>
      )}

      {/* 4. HMS: Multi-Folio Accounting & GST Ledger */}
      {variant === 'hms-billing' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Multi-Folio Accounting & GST Ledger</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              NUMERIC(12,2)
            </span>
          </div>

          <div className="p-3.5 rounded-[8px] border border-line bg-bg/70 space-y-2 text-[12px] font-mono [font-variant-numeric:tabular-nums]">
            <div className="flex justify-between text-fg-muted">
              <span>Master Folio (Room Tariff):</span>
              <span className="text-fg font-medium">₹7,200.00 (12% GST)</span>
            </div>
            <div className="flex justify-between text-fg-muted">
              <span>Incidentals (Dining/Spa):</span>
              <span className="text-fg font-medium">₹1,450.00 (18% GST)</span>
            </div>
            <div className="h-[1px] bg-line my-1" />
            <div className="flex justify-between text-[13px] font-semibold text-fg">
              <span>Total Invoice Amount:</span>
              <span className="text-accent">₹9,775.00</span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>GSTIN: 07AABCU9603R1ZX</span>
            <span className="text-accent font-medium">Indian Tax Compliant</span>
          </div>
        </div>
      )}

      {/* 5. SettleDesk: Interactive Deal Split Cascade Simulator */}
      {(variant === 'settledesk-simulator' || variant === 'settledesk-cascade') && (
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Interactive Commission Engine</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              REAL-TIME MATRIX
            </span>
          </div>

          {/* Sliders and Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 [font-variant-numeric:tabular-nums]">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[12px] font-medium text-fg mb-1">
                  <span>Property Sale Price</span>
                  <span className="text-accent font-semibold">${dealPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={250000}
                  max={5000000}
                  step={50000}
                  value={dealPrice}
                  onChange={(e) => setDealPrice(Number(e.target.value))}
                  className="w-full accent-[#4E6B00] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[12px] font-medium text-fg mb-1">
                  <span>Commission Rate</span>
                  <span className="text-accent font-semibold">{commissionRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={6.0}
                  step={0.5}
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="w-full accent-[#4E6B00] cursor-pointer"
                />
              </div>
            </div>

            <div>
              <span className="block text-[12px] font-medium text-fg mb-2">Agent Split Tier</span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: '70_30', label: '70/30 Std' },
                  { id: '80_20', label: '80/20 Senior' },
                  { id: '90_10', label: '90/10 Partner' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setAgentSplitTier(tier.id as '80_20' | '70_30' | '90_10')}
                    className={clsx(
                      'py-2 px-1 text-[11px] font-medium rounded-[6px] border transition-colors text-center cursor-pointer',
                      agentSplitTier === tier.id
                        ? 'border-accent bg-accent/10 text-accent font-semibold'
                        : 'border-line bg-bg text-fg-muted hover:border-fg'
                    )}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-line [font-variant-numeric:tabular-nums]">
            <div className="p-2.5 rounded-[8px] bg-bg/80 border border-line">
              <div className="text-[10px] text-fg-muted uppercase">Gross GCI</div>
              <div className="text-[14px] font-semibold text-fg mt-0.5">${grossCommission.toLocaleString()}</div>
            </div>
            <div className="p-2.5 rounded-[8px] bg-accent/[0.08] border border-accent/30">
              <div className="text-[10px] text-accent uppercase font-medium">Agent Split</div>
              <div className="text-[14px] font-semibold text-accent mt-0.5">${agentEarnings.toLocaleString()}</div>
            </div>
            <div className="p-2.5 rounded-[8px] bg-bg/80 border border-line">
              <div className="text-[10px] text-fg-muted uppercase">Brokerage Share</div>
              <div className="text-[14px] font-semibold text-fg mt-0.5">${brokerageEarnings.toLocaleString()}</div>
            </div>
          </div>
        </div>
      )}

      {/* 6. SettleDesk: Super Admin Portal */}
      {variant === 'settledesk-admin' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Super Admin Command Center</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              ACTION REQUIRED
            </span>
          </div>

          <div className="p-3.5 rounded-[8px] border border-line bg-bg/70 space-y-2 [font-variant-numeric:tabular-nums]">
            <div className="flex justify-between items-center text-[13px]">
              <span className="font-medium text-fg">Tenant: Apex Realty Partners</span>
              <span className="text-[11px] text-accent font-medium bg-accent/10 px-1.5 py-0.5 rounded">Active Plan</span>
            </div>
            <div className="text-[12px] text-fg-muted">
              42 Active Brokers · 1,280 Units Managed · Dedicated Schema Scoped
            </div>
            <div className="flex items-center gap-1.5 pt-1 text-[11.5px] text-accent">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>RLS Enforced · Immutable Ledger Synced</span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>Subscription: Enterprise Multi-Branch</span>
            <span className="text-fg font-medium">99.9% Uptime SLA</span>
          </div>
        </div>
      )}

      {/* 7. SettleDesk: Client Admin Dashboard / Payout Approval */}
      {variant === 'settledesk-ledger' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Deal & Payout Approvals</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              ONE-CLICK APPROVE
            </span>
          </div>

          <div className="p-3.5 rounded-[8px] border border-line bg-bg/70 space-y-2 [font-variant-numeric:tabular-nums]">
            <div className="flex justify-between items-center text-[13px]">
              <span className="font-medium text-fg">Contract #SD-9021 · 742 Evergreen Terr.</span>
              <span className="text-[11.5px] font-semibold text-accent">$1,850,000</span>
            </div>
            <div className="text-[12px] text-fg-muted">
              Agent: Marcus Vance (80/20 Tier) · Closing Binder Validated
            </div>
            <div className="flex items-center justify-between pt-1 text-[11.5px] text-fg font-mono">
              <span>Agent Commission: $44,400.00</span>
              <span className="text-accent font-semibold">Desk Cap Reached ✓</span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>Unit Status: Transitioned to 'Sold'</span>
            <span className="text-accent font-medium">Bank Transfer Queued</span>
          </div>
        </div>
      )}

      {/* 8. SettleDesk: Broker Mobile App */}
      {variant === 'settledesk-agent' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-accent" />
              <span className="text-[13px] font-medium text-fg">Broker Mobile App Console</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.05em] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-[4px]">
              LIVE INVENTORY
            </span>
          </div>

          <div className="p-3.5 rounded-[8px] border border-line bg-bg/70 space-y-2 [font-variant-numeric:tabular-nums]">
            <div className="flex justify-between items-center text-[13px]">
              <span className="font-medium text-fg">Listing: The Glass Penthouse</span>
              <span className="text-[11px] text-accent font-medium bg-accent/10 px-1.5 py-0.5 rounded">Active Deal</span>
            </div>
            <div className="text-[12px] text-fg-muted">
              Client Offer Uploaded · Digital Signature Captured
            </div>
            <div className="flex items-center gap-1.5 pt-1 text-[11.5px] text-accent">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Direct Submission to Admin Review Queue</span>
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between text-[11.5px] text-fg-muted [font-variant-numeric:tabular-nums]">
            <span>Real-time push notifications</span>
            <span className="text-fg font-medium">iOS & Android Native</span>
          </div>
        </div>
      )}
    </div>
  );
}
