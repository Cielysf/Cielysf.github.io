# CIELY — Portfólio de Social Media

Site estático (HTML, CSS e JS puros) pronto para editar e publicar no GitHub Pages.

## Estrutura

```
portfolio-site/
├── index.html      → conteúdo e estrutura do site
├── css/style.css   → cores, tipografia e layout
├── js/script.js    → menu mobile, tema claro/escuro, animações de scroll
├── js/i18n.js      → traduções (PT / EN / ES) e troca de idioma
└── README.md
```

## Como editar o conteúdo

Abra o `index.html` em qualquer editor de texto (VS Code, por exemplo) e procure por:

- **`Ciely`** → troque pelo seu nome ou nome de marca (aparece no menu e no rodapé)
- **Textos entre `[colchetes]`** → são os placeholders. Substitua por seus textos reais
  (apresentação, serviços, cases, depoimentos)
- **Seção de contato** (`id="contato"`):
  - `mailto:seuemail@exemplo.com` → seu e-mail
  - `https://wa.me/5500000000000` → seu link do WhatsApp (formato: código do país + DDD + número, sem espaços)
  - Links de Instagram, LinkedIn e Behance no rodapé

## Idiomas (PT / EN / ES)

O site tem três idiomas. O visitante troca pelos botões **PT | EN | ES** no menu, e a escolha
fica salva no navegador e vale para todas as páginas. Na primeira visita, o idioma é escolhido
pelo idioma do navegador (se não for PT/EN/ES, abre em português). Também dá para abrir direto
em um idioma com `?lang=en` ou `?lang=es` no final do endereço.

**Como editar uma tradução:** abra `js/i18n.js`, procure a chave (ex.: `"index.hero.sub"`) e
altere o texto em `pt`, `en` ou `es`.

**Como adicionar um texto novo:**

1. No HTML, coloque `data-i18n="minha.chave"` no elemento e deixe o texto em português dentro dele:
   ```html
   <p data-i18n="minha.chave">Texto em português</p>
   ```
2. Em `js/i18n.js`, adicione a chave com os três idiomas:
   ```js
   "minha.chave": { pt: "Texto em português", en: "Text in English", es: "Texto en español" },
   ```

Para texto com HTML dentro (ex.: `<em>`), use `data-i18n-html`. Para traduzir atributos
(`aria-label`, `alt`, `content`), use `data-i18n-attr="alt:minha.chave"`.

> Ao editar `css/style.css` ou `js/*.js`, aumente o número depois de `?v=` nos arquivos HTML
> (ex.: `style.css?v=11` → `?v=12`) para o navegador não usar a versão antiga em cache.

## Como trocar os blocos de case por imagens reais

No `index.html`, cada case tem um bloco assim:

```html
<div class="case-thumb">[ imagem do case ]</div>
```

Troque por:

```html
<div class="case-thumb">
  <img src="assets/case-01.jpg" alt="Descrição do case" style="width:100%;height:100%;object-fit:cover;" />
</div>
```

Crie uma pasta `assets/` na raiz do projeto e coloque suas imagens lá.

## Como testar localmente

Basta abrir o arquivo `index.html` no navegador (duplo clique) — não precisa de servidor.

Se preferir rodar com um servidor local simples (opcional):

```bash
# Python 3
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, mas o Pages
   gratuito exige repositório público, a menos que você tenha GitHub Pro/Team).
2. Envie os arquivos deste projeto para o repositório:

   ```bash
   git init
   git add .
   git commit -m "primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**. Em alguns minutos, o site estará disponível em:

   ```
   https://SEU-USUARIO.github.io/SEU-REPOSITORIO/
   ```

## Dica: domínio próprio

Se quiser usar um domínio próprio (ex: `seunome.com`), depois de publicar no GitHub
Pages vá em **Settings → Pages → Custom domain** e siga as instruções do GitHub para
configurar o DNS.
