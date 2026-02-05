
# Plano de Correções do Portfólio

## Resumo das Alterações

Este plano corrige 4 problemas identificados:

1. **Imagem de perfil não aparece** - O caminho está incorreto
2. **Anos de experiência** - Atualizar de 3+ para 4 anos
3. **Localização** - Adicionar Rio de Janeiro
4. **Sobreposição de conteúdo** - Ajustar o espaçamento do texto de profissão (TypewriterEffect)

---

## 1. Corrigir Imagem de Perfil

**Problema identificado:**
A imagem está em `src/assets/profile-photo.jpg`, mas o código tenta acessá-la como `/assets/profile-photo.jpg`. Arquivos em `src/assets` precisam ser importados via JavaScript, não acessados diretamente pela URL.

**Solução:**
Importar a imagem corretamente no topo do arquivo Hero.tsx e usar a variável importada.

**Arquivo:** `src/components/Hero.tsx`

```text
// Adicionar no topo do arquivo:
import profilePhoto from '@/assets/profile-photo.jpg';

// Alterar a tag img:
<img 
  src={profilePhoto}   // Era: src="/assets/profile-photo.jpg"
  alt="Alvaro Assunção - Foto de Perfil"
  ...
/>
```

---

## 2. Atualizar Anos de Experiência (3+ para 4)

**Locais que precisam ser atualizados:**

| Arquivo | Local | Alteração |
|---------|-------|-----------|
| `src/components/Hero.tsx` | Linha 92 | "3+ anos" para "4 anos" |
| `src/components/About.tsx` | Linha 8, 65, 109 | "3+" para "4" |

---

## 3. Adicionar Localização: Rio de Janeiro

**Solução:**
Adicionar a localização na descrição do Hero e na seção About.

**Arquivo:** `src/components/Hero.tsx`

Atualizar o texto da descrição para incluir a localização:

```text
Soluções inteligentes com IA e análise de dados, transformando 
processos complexos em automações eficientes. 4 anos de experiência 
no setor de O&G. Rio de Janeiro, Brasil.
```

---

## 4. Corrigir Sobreposição do Texto de Profissão

**Problema:**
O componente TypewriterEffect (que mostra "Engenheiro de Software | Analista de dados...") está sem espaçamento adequado, causando sobreposição com outros elementos.

**Solução:**
Adicionar margens verticais (padding/margin) ao componente do TypewriterEffect no Hero.tsx para criar espaço entre os elementos.

**Arquivo:** `src/components/Hero.tsx`

Alterar a classe do motion.div que contém o TypewriterEffect:
- Adicionar `py-4` para padding vertical
- Garantir altura mínima com `min-h-[80px]` para acomodar o texto em duas linhas

---

## Arquivos que Serão Modificados

| Arquivo | Alterações |
|---------|------------|
| `src/components/Hero.tsx` | Corrigir import da imagem, atualizar anos, adicionar localização, ajustar espaçamento |
| `src/components/About.tsx` | Atualizar anos de experiência de 3+ para 4 |

---

## Resultado Esperado

Após as alterações:
- A foto de perfil será exibida corretamente no Hero
- Todos os textos mostrarão "4 anos de experiência"  
- A localização "Rio de Janeiro" aparecerá na descrição
- O texto da profissão terá espaçamento adequado sem sobrepor outros elementos
