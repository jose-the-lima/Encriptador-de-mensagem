# Encriptador-de-mensagem

## Imagens do projeto

<img src="https://user-images.githubusercontent.com/120755345/209124910-a6036004-a7b2-494b-8f9f-e347737e723b.png" alt="" width="70%"/>
<img src="https://user-images.githubusercontent.com/120755345/209125162-9ba2eb9b-052e-4e4f-863e-e51be7dc54d3.png" />
<img src="https://user-images.githubusercontent.com/120755345/209125261-550b4249-1318-4003-8499-59675d794094.png"/>

## Objetivo do projeto:

<p>Esse projeto foi desenvolvido como um challenge, o objetivo era construir um programa que encripta uma certa mensagem para que ela seja secreta e que seu conteúdo só seja
desvendado por quem tem acesso ao mesmo encriptador, ou ao proprio dicionario da encriptação.
<br>Pode parecer um projeto simples, mas foi de grande ajuda para o meu aprendizado e evolução como programador. 
</p>

## Tecnologias utilizadas na criação desse projeto:

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Git</li>
</ul>

## Algumas práticas e métodos utilizados no projeto.

<p>Para fazer a encriptação, foi utilizado o método <strong>"replaceAll"</strong>, e para cada letra do dicionario de encriptação, ele verificava se tinha a letra correspondente, e se tivesse
a encriptação era feita a partir dele.</p>

<p>E para fazer essa verificação letra por letra, foi utilizado a estrutura de repetição <strong>"for"</strong>, para percorrer todas as letras do dicionario de encriptação, e trocar todas 
as vogais encontradas correspondentes, pelas suas substituições pre-definidas.</p>

<p>Para o botão de copiar eu utilizei o método <strong>"navigator.clipboard.writeText(text)"</strong> para copiar o conteúdo do <strong>"innerHTML"</strong> da área de mensagem, no caso "área de mensagem encriptada"
com esse método eu fui capaz de copiar para a área de transferencia o conteúdo do elemento html que recebia o resultado, e com isso facilitar na hora da desencriptação.
</p>

<p>Para ativação e desativação do background da área de resultado de mensagens eu utilizei o <strong>".classList.add"</strong> e <strong>".classList.remove"</strong> para tanto adicionar a classe
invisivel, ou .sem-nada, quanto para retirar também, e a partir dessas ideias eu fiz uma função para cada um.

<br>
<ul>
  <li>ativarBackground()</li>
  <li>desativarBackground()</li>
</ul>
</p>

