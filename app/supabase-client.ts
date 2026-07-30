import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sxbsuyhvcnmpoaksjgbf.supabase.co";
const supabasePublishableKey = "sb_publishable_o8ZVsU03VJCGF8Xo47CfTA_fQmOAnkq";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    detectSessionInUrl: true,
    persistSession: true,
    autoRefreshToken: true,
  },
});
