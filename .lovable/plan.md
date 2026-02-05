
# Plano de Atualizações do Portfólio

## Resumo das Alterações

Este plano abrange 4 atualizações principais solicitadas para o seu portfólio:

1. **Trocar a foto de perfil** - Substituir a imagem atual pela nova foto enviada
2. **Adicionar nova experiência profissional** - Inserir o cargo na BUS2 como a posição mais recente
3. **Cor metálica para o nome** - Criar um estilo visual elegante e metálico para "Alvaro Assunção"
4. **Atualizar o link do currículo** - Substituir o arquivo do CV pelo novo PDF enviado

---

## 1. Trocar a Foto de Perfil

**O que será feito:**
- Copiar a nova imagem enviada para a pasta de assets do projeto
- Atualizar o componente Hero.tsx para usar a nova foto

**Arquivos envolvidos:**
- `src/assets/profile-photo.jpg` (novo arquivo)
- `src/components/Hero.tsx` (atualização do caminho da imagem)

---

## 2. Adicionar Experiência na BUS2

**Posição:** Analista de Dados BUS2 - Planejamento e Operação na Mobilidade

**Período:** Setembro 2024 - Atual

**Local:** Remoto

**Detalhes que serão incluídos:**
- Análise e tratamento de grandes volumes de dados do setor de transporte público
- Desenvolvimento de pipelines ETL com Python (Pandas, NumPy, DuckDB)
- Orquestração de workflows com Apache Airflow
- Consultas SQL avançadas em Oracle
- Uso de Docker, KNIME e Bitbucket

**Arquivo envolvido:**
- `src/components/Experience.tsx` - Adicionar a nova experiência no topo da lista

---

## 3. Cor Metálica para o Nome

**Estilo proposto:** Um gradiente prateado/metálico elegante com brilho sutil

**Características visuais:**
- Gradiente de tons de prata, cinza claro e branco
- Efeito de brilho animado suave (shimmer)
- Sombra sutil para dar profundidade

**Arquivos envolvidos:**
- `src/index.css` - Criar nova classe CSS `.silver-metallic-title`
- `src/components/Hero.tsx` - Aplicar a nova classe ao nome
- `src/components/Footer.tsx` - Aplicar a mesma classe para consistência

---

## 4. Atualizar Link do Currículo

**O que será feito:**
- Copiar o novo PDF do currículo para a pasta public
- Atualizar o botão "CV Completo" no Footer para baixar o novo arquivo PDF

**Arquivos envolvidos:**
- `public/cv/Curriculo_Alvaro_Assuncao.pdf` (novo arquivo)
- `src/components/Footer.tsx` - Atualizar o href e o atributo download

---

## Detalhes Técnicos

### Novo CSS para Cor Metálica
```text
.silver-metallic-title {
  background: linear-gradient(
    135deg, 
    #C0C0C0,    /* Prata */
    #E8E8E8,    /* Cinza claro */
    #FFFFFF,    /* Branco */
    #D4D4D4,    /* Prata clara */
    #A8A8A8     /* Prata escura */
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: metallicShine 4s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1));
}
```

### Nova Experiência na Timeline
A experiência BUS2 será adicionada como primeiro item do array `experiences`, aparecendo no topo da seção:

```text
{
  company: "BUS2 PLANEJAMENTO E OPERAÇÃO NA MOBILIDADE",
  position: "Analista de Dados",
  period: "Set/2024 - Atual",
  location: "Remoto",
  description: "Responsável pela análise e tratamento de grandes volumes de dados em projetos estratégicos do setor de transporte público. Desenvolvimento de pipelines ETL robustos utilizando Python (Pandas, NumPy, DuckDB). Orquestração de workflows com Apache Airflow. Consultas avançadas em Oracle SQL, containerização com Docker, e automação com KNIME. Modelagem de dados para suporte à tomada de decisão estratégica.",
  icon: "🚌"
}
```

---

## Arquivos que Serão Modificados

| Arquivo | Tipo de Alteração |
|---------|-------------------|
| `src/assets/profile-photo.jpg` | Novo arquivo (cópia da foto) |
| `public/cv/Curriculo_Alvaro_Assuncao.pdf` | Novo arquivo (cópia do PDF) |
| `src/components/Hero.tsx` | Atualizar imagem e classe do nome |
| `src/components/Experience.tsx` | Adicionar nova experiência |
| `src/components/Footer.tsx` | Atualizar link do CV e classe do nome |
| `src/index.css` | Adicionar nova classe CSS metálica |

---

## Resultado Esperado

Após as alterações:
- A nova foto profissional aparecerá centralizada acima do seu nome
- O nome "Alvaro Assunção" terá um brilho metálico elegante e sofisticado
- A experiência mais recente (BUS2) aparecerá primeiro na timeline
- O botão de download do CV baixará o novo PDF atualizado
