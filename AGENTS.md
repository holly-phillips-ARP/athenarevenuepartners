# AGENTS.md

## Rules
- Primary and secondary offer prices/scope live in `src/data/offerings.ts`; pages and MCP tools share this catalog. Why: referrals and founders must receive identical terms.
- Shared founder content and conversation CTAs live in `FounderSections`, with full offer details on `/offerings` anchors and explicit legacy redirects. Why: prevent duplicate catalogs and keep old links useful.
- Keep the existing `diagnostic_requests` storage and `diagnostic-request` email identifiers internal while presenting conversation requests. Why: preserve submission and notification compatibility without advertising a retired offer.
- Saved "look" restore points live under `/mnt/documents/.lovable/snapshots/<date>/` as `site/` (full file copy) plus `screenshots/`; restore by copying `site/` back over the project without touching `.git`, `.jj` or `node_modules`, or via the History tab. Why: the user wants named versions they can go back to.
