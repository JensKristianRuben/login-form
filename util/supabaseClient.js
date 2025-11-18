import { createCliet } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase  = createCliet(supabaseUrl, supabaseKey);

export default supabase;