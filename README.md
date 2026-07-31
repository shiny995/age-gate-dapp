
## Privacy Model
This dApp uses zero-knowledge proofs to verify age eligibility without revealing the user's actual date of birth. An observer can see that a valid proof was submitted and verified on-chain, but cannot see the underlying age or birthdate data. Only the boolean eligibility result (pass/fail) is public.

### Tech Stack
- Compact circuits for zero-knowledge proofs
- Node.js + Jest for testing
