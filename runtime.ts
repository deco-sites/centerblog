import { proxy } from "deco/clients/withManifest.ts";
import type { Manifest } from "./manifest.gen.ts";
import type { Manifest as ManifestResend } from "apps/resend/manifest.gen.ts";

export const invoke = proxy<
  Manifest & ManifestResend
>();