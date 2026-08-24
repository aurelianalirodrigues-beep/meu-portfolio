# Meu Portfólio Web — Aureliana Rodrigues

Projeto acadêmico desenvolvido com HTML, CSS e JavaScript, utilizando IA generativa como copiloto.

## Arquivos
- `index.html` — estrutura e conteúdo
- `style.css` — identidade visual, layout e responsividade
- `script.js` — interatividade

## Funcionalidades
- Menu responsivo para celular
- Modo claro/escuro com `localStorage`
- Animações de entrada ao rolar a página
- Botão voltar ao topo
- Validação visual de formulário
- Layout responsivo

## Publicação
O projeto pode ser publicado gratuitamente usando GitHub Pages.

Antes da publicação, substitua os links de GitHub, LinkedIn e e-mail no `index.html`.





---

# Atividade – Pipeline CI/CD com Python e GitHub Actions

Esta atividade foi desenvolvida na disciplina de Garantia de Software com o objetivo de implementar um pipeline de Continuous Integration (CI) e Continuous Delivery (CD) utilizando Python, testes automatizados e GitHub Actions.

## 1. O que representa a etapa de CI neste projeto?

A etapa de Continuous Integration (CI) representa a verificação automática do código sempre que uma alteração é enviada ao repositório.

Neste projeto, o GitHub Actions baixa o código, configura o ambiente Python, instala as dependências e executa automaticamente os testes utilizando o pytest.

Dessa forma, o CI funciona como um mecanismo de garantia de qualidade, verificando se o código continua funcionando corretamente após as alterações.

## 2. O que impede a execução do Continuous Delivery quando existe um defeito?

O Continuous Delivery depende da aprovação do Continuous Integration.

Essa dependência é definida no arquivo pipeline.yml pela instrução:

`needs: ci`

Se algum teste falhar, o job de CI também falha. Como o Continuous Delivery depende do CI, ele não será executado enquanto houver falha nos testes.

Assim, um código com defeito não gera um novo artefato para entrega.

## 3. Qual seria a próxima etapa necessária para transformar este pipeline em Continuous Deployment?

Seria necessário adicionar uma etapa de deploy automático.

Atualmente, depois que os testes são aprovados, o pipeline gera o artefato `calculadora-python`.

No Continuous Deployment, após a aprovação dos testes, o sistema também faria automaticamente a publicação da aplicação em um ambiente de produção, sem necessidade de uma etapa manual de entrega.

## Resultado

O pipeline foi executado com sucesso no GitHub Actions.

- Continuous Integration: aprovado
- Continuous Delivery: aprovado
- Testes automatizados: aprovados
- Artefato gerado: `calculadora-python`

Os testes automatizados funcionam como um quality gate, pois uma falha nos testes impede que o processo de entrega continue.
