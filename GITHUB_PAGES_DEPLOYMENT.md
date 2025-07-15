# Guia de Publicação no GitHub Pages

## Pré-requisitos
1. Ter um repositório no GitHub com o código do projeto
2. Ter o GitHub Pages habilitado nas configurações do repositório

## Passos para Publicar

### 1. Configurar o Base Path
Se o seu repositório se chama `asperus-site`, você precisa definir a variável de ambiente:

```bash
# No terminal, antes de fazer o build:
export VITE_BASE_PATH=/asperus-site/

# Ou crie um arquivo .env na raiz do projeto:
echo "VITE_BASE_PATH=/seu-nome-do-repositorio/" > .env
```

### 2. Fazer o Build
```bash
npm run build
```

### 3. Configurar GitHub Pages
1. Vá para as configurações do seu repositório no GitHub
2. Na seção "Pages":
   - Source: Deploy from a branch
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`

### 4. Criar GitHub Action (Recomendado)
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_BASE_PATH: /${{ github.event.repository.name }}/
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 5. Alternativa Manual
Se preferir fazer manualmente:

1. Faça o build com a variável de ambiente correta
2. Copie o conteúdo da pasta `dist` para a branch `gh-pages`
3. Faça push da branch `gh-pages`

## Solução de Problemas

### Site em Branco
- Verifique se o `VITE_BASE_PATH` está correto
- Certifique-se que o arquivo `404.html` foi criado
- Verifique se os caminhos dos assets estão corretos

### Roteamento não Funciona
- O arquivo `404.html` deve estar na pasta `dist` após o build
- Certifique-se que o script de redirecionamento está no `index.html`

### Assets não Carregam
- Verifique se o base path está configurado corretamente
- Limpe o cache do navegador
- Verifique se todos os arquivos estão na pasta `dist`

## URL Final
Após a publicação, seu site estará disponível em:
`https://seu-usuario.github.io/seu-repositorio/`