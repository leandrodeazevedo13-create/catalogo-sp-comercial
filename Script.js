// 1. URL CORRETA: Copie exatamente isto, sem o /rest/v1/ e sem os xxx que estavam a causar erro
const SUPABASE_URL = "https://xxxsxsernmaltunwyfaq.supabase.co";
const SUPABASE_KEY = "sb_publishable_sQNMnxWafcK5iF6CCXFFXg_lhx2nTQ-";

// 2. INICIALIZAÇÃO CORRETA: Usando um nome diferente para evitar o erro de declaração
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 3. AGORA, use 'supabaseClient' em todas as suas chamadas ao banco:
async function carregarCategorias() {
    try {
        const { data, error } = await supabaseClient
            .from('categorias')
            .select('*');

        if (error) {
            console.error("Erro do Supabase:", error);
            return;
        }
        console.log("Dados carregados com sucesso:", data);
    } catch (err) {
        console.error("Erro crítico:", err);
    }
}

carregarCategorias();