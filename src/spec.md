# Specification

## Summary
**Goal:** Ensure the “Play Now” button launches SA-MP and connects to the server at `samp://15.235.185.4:7785`.

**Planned changes:**
- Update the “Play Now” button (or its click handler/link target) to use the exact SA-MP connect URL `samp://15.235.185.4:7785`.
- Verify any related user-facing text remains in English and that no read-only UI component files are modified.

**User-visible outcome:** Clicking “Play Now” opens SA-MP (if installed) and connects the player to `15.235.185.4:7785`.
