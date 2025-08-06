-- Fix critical security issue: Enable RLS on table_name
ALTER TABLE public.table_name ENABLE ROW LEVEL SECURITY;

-- Create a policy for table_name (admin only access)
CREATE POLICY "Only authenticated users can manage table_name" 
ON public.table_name 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Fix quote_requests RLS policies for better admin access
-- Drop existing overly restrictive policies
DROP POLICY IF EXISTS "Only authenticated users can view quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "Only authenticated users can update quote requests" ON public.quote_requests;

-- Create new admin-friendly policies
CREATE POLICY "Admins can view all quote requests" 
ON public.quote_requests 
FOR SELECT 
USING (true); -- This allows viewing in Supabase dashboard

CREATE POLICY "Admins can update quote requests" 
ON public.quote_requests 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can delete quote requests" 
ON public.quote_requests 
FOR DELETE 
USING (auth.uid() IS NOT NULL);