# Nexus – Soluções

Site institucional da Nexus – Soluções, preparado para GitHub e hospedagens estáticas como Netlify, Vercel, Cloudflare Pages e serviços que aceitam upload de uma pasta pronta.

## Requisitos

- Node.js 20.9 ou superior (recomendado: Node 22);
- npm 10 ou superior.

## Executar no computador

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Gerar a versão de produção

```bash
npm install
npm run build
```

O site pronto será criado na pasta `out`. O processo também valida automaticamente todas as páginas, os contatos, o sitemap, o robots.txt e o favicon.

## Publicar no GitHub

1. Crie um repositório vazio no GitHub.
2. Extraia este projeto e abra o terminal dentro da pasta.
3. Execute:

```bash
git init
git add .
git commit -m "Site Nexus – Soluções"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Não envie as pastas `node_modules`, `.next` ou `out`; elas já estão no `.gitignore`.

## Publicar na Netlify pelo GitHub

1. Na Netlify, escolha **Add new site > Import an existing project**.
2. Conecte o repositório do GitHub.
3. A Netlify detectará automaticamente o arquivo `netlify.toml`.
4. Confirme:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Publique.

A Netlify fornece automaticamente a URL usada pelo sitemap e pelos metadados. Se utilizar domínio próprio, cadastre a variável `NEXT_PUBLIC_SITE_URL` com a URL completa, por exemplo `https://www.nexus.com.br`.

## Publicar por upload manual

1. Execute `npm install` e `npm run build`.
2. Envie somente o conteúdo da pasta `out` para a hospedagem.

Na Netlify também é possível arrastar a pasta `out` para a área de deploy manual.

## Outras hospedagens

Use estes parâmetros:

| Configuração | Valor |
| --- | --- |
| Comando de instalação | `npm install` ou `npm ci` |
| Comando de build | `npm run build` |
| Pasta de publicação | `out` |
| Node.js | 22 |

Como a saída é estática, não é necessário configurar servidor, banco de dados ou funções backend.

## Variáveis opcionais

Copie `.env.example` para `.env.local` apenas se precisar configurar:

- `NEXT_PUBLIC_SITE_URL`: domínio público usado no sitemap e nos metadados;
- `NEXT_PUBLIC_BASE_PATH`: subpasta de publicação, útil em ambientes como GitHub Pages.

## Formulário de contato

O formulário não depende de backend. Ele valida os campos, organiza a mensagem e abre o WhatsApp para o visitante revisar e confirmar o envio.
