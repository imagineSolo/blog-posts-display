import { expect } from 'vitest'
import '@testing-library/jest-dom'

import { describe, it, vi } from 'vitest'

globalThis.describe = describe
globalThis.it = it
globalThis.expect = expect
globalThis.vi = vi
