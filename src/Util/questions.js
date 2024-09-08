const questions = [
    // Perguntas de múltipla escolha
    {
      question: "Qual é a principal função da camada de enlace no modelo OSI?",
      options: [
        "A) Controlar o roteamento de pacotes pela rede",
        "B) Dividir os dados em quadros e garantir a entrega",
        "C) Gerenciar a comunicação entre diferentes redes",
        "D) Determinar o caminho mais curto para o destino"
      ],
      answer: "B) Dividir os dados em quadros e garantir a entrega"
    },
    {
      question: "O que é o enquadramento (framing) na camada de enlace?",
      options: [
        "A) Verificar a integridade dos dados transmitidos",
        "B) Técnica para agrupar dados em quadros para transmissão",
        "C) Gerenciar o fluxo de pacotes entre roteadores",
        "D) Dividir os pacotes de rede em segmentos menores"
      ],
      answer: "B) Técnica para agrupar dados em quadros para transmissão"
    },
    {
      question: "Qual subcamada da camada de enlace gerencia o acesso ao meio físico?",
      options: [
        "A) Subcamada de Controle de Enlace Lógico (LLC)",
        "B) Subcamada de Controle de Acesso ao Meio (MAC)",
        "C) Subcamada de Controle de Roteamento (CRC)",
        "D) Subcamada de Controle de Fluxo (FCF)"
      ],
      answer: "B) Subcamada de Controle de Acesso ao Meio (MAC)"
    },
    {
      question: "Qual técnica a camada de enlace utiliza para evitar que muitos dados sejam enviados ao mesmo tempo para o receptor?",
      options: [
        "A) Controle de roteamento",
        "B) Controle de fluxo",
        "C) Controle de endereçamento",
        "D) Controle de colisão"
      ],
      answer: "B) Controle de fluxo"
    },
    {
      question: "Qual função da camada de enlace utiliza bits de paridade e checksum?",
      options: [
        "A) Controle de fluxo",
        "B) Controle de erros",
        "C) Enquadramento",
        "D) Acesso ao meio"
      ],
      answer: "B) Controle de erros"
    },
    {
      question: "Qual endereço é usado na camada de enlace para identificar dispositivos?",
      options: [
        "A) Endereço IP",
        "B) Endereço MAC",
        "C) Endereço de broadcast",
        "D) Endereço de porta"
      ],
      answer: "B) Endereço MAC"
    },
    {
      question: "O que é o protocolo CSMA/CD utilizado na camada de enlace?",
      options: [
        "A) Um protocolo que evita colisões em redes sem fio",
        "B) Um protocolo que regula o fluxo de dados entre dispositivos",
        "C) Um protocolo que detecta colisões de pacotes e gerencia retransmissões",
        "D) Um protocolo para criptografia de dados"
      ],
      answer: "C) Um protocolo que detecta colisões de pacotes e gerencia retransmissões"
    },
    {
      question: "O que acontece quando uma colisão é detectada em uma rede usando CSMA/CD?",
      options: [
        "A) O pacote é retransmitido imediatamente",
        "B) Os dispositivos aguardam um tempo aleatório antes de retransmitir",
        "C) A transmissão é bloqueada até que o erro seja corrigido",
        "D) Os dados são descartados e não são retransmitidos"
      ],
      answer: "B) Os dispositivos aguardam um tempo aleatório antes de retransmitir"
    },
    {
      question: "Qual das seguintes funções NÃO é responsabilidade da camada de enlace?",
      options: [
        "A) Controle de fluxo",
        "B) Controle de erros",
        "C) Roteamento de pacotes",
        "D) Acesso ao meio"
      ],
      answer: "C) Roteamento de pacotes"
    },
    {
      question: "Como a camada de enlace detecta erros em um quadro?",
      options: [
        "A) Usando bits de paridade e checksum",
        "B) Verificando o endereço IP do destinatário",
        "C) Através do controle de fluxo entre dispositivos",
        "D) Monitorando a velocidade de transmissão"
      ],
      answer: "A) Usando bits de paridade e checksum"
    },
    {
      question: "O que é um endereço MAC?",
      options: [
        "A) Um identificador lógico usado para comunicação entre redes diferentes",
        "B) Um identificador único atribuído a dispositivos de rede para comunicação",
        "C) Um endereço usado para identificar pacotes em uma camada superior",
        "D) Um protocolo para controle de erros na transmissão de dados"
      ],
      answer: "B) Um identificador único atribuído a dispositivos de rede para comunicação"
    },
    {
      question: "Em redes Ethernet, qual função o protocolo CSMA/CD desempenha?",
      options: [
        "A) Detecta colisões e gerencia retransmissões",
        "B) Gerencia o roteamento de pacotes pela rede",
        "C) Verifica a integridade dos pacotes recebidos",
        "D) Controla a ordem de envio de pacotes por prioridade"
      ],
      answer: "A) Detecta colisões e gerencia retransmissões"
    },
    {
      question: "O que ocorre quando um quadro é detectado como corrompido na camada de enlace?",
      options: [
        "A) Ele é retransmitido automaticamente",
        "B) O quadro é corrigido e enviado novamente",
        "C) Ele é descartado e o remetente é notificado para retransmiti-lo",
        "D) O quadro é ignorado e o próximo é processado"
      ],
      answer: "C) Ele é descartado e o remetente é notificado para retransmiti-lo"
    },
    {
      question: "O que é o protocolo de Controle de Enlace Lógico (LLC)?",
      options: [
        "A) Um protocolo que gerencia o acesso ao meio físico",
        "B) Um protocolo que fornece controle de fluxo e controle de erros",
        "C) Um protocolo de roteamento para redes com múltiplos dispositivos",
        "D) Um protocolo que realiza controle de congestionamento em redes locais"
      ],
      answer: "B) Um protocolo que fornece controle de fluxo e controle de erros"
    },
    {
      question: "Qual é a principal diferença entre LLC e MAC na camada de enlace?",
      options: [
        "A) LLC lida com controle de fluxo e erros, enquanto MAC lida com acesso ao meio físico",
        "B) MAC gerencia o roteamento de pacotes, enquanto LLC lida com a integridade de pacotes",
        "C) LLC lida com endereçamento físico, enquanto MAC controla o acesso à rede",
        "D) LLC opera na camada física, enquanto MAC opera na camada de rede"
      ],
      answer: "A) LLC lida com controle de fluxo e erros, enquanto MAC lida com acesso ao meio físico"
    },
    // Perguntas adicionais de múltipla escolha
    {
      question: "O que é o algoritmo CRC usado na camada de enlace?",
      options: [
        "A) Um método de controle de fluxo",
        "B) Um método de detecção de erros",
        "C) Um método de roteamento",
        "D) Um protocolo de controle de congestionamento"
      ],
      answer: "B) Um método de detecção de erros"
    },
    {
      question: "Qual é a função principal de um endereço MAC?",
      options: [
        "A) Identificar dispositivos dentro de uma rede local",
        "B) Identificar redes em diferentes localidades",
        "C) Atribuir um endereço IP a um dispositivo",
        "D) Ajudar no roteamento de pacotes pela internet"
      ],
      answer: "A) Identificar dispositivos dentro de uma rede local"
    },
    {
      question: "Qual camada do modelo OSI está diretamente abaixo da camada de enlace?",
      options: [
        "A) Camada de transporte",
        "B) Camada de rede",
        "C) Camada física",
        "D) Camada de aplicação"
      ],
      answer: "C) Camada física"
    },
    {
      question: "Em uma rede Ethernet, o que acontece se dois dispositivos transmitirem dados ao mesmo tempo?",
      options: [
        "A) Os pacotes se misturam e são entregues incorretamente",
        "B) Ambos os pacotes são descartados imediatamente",
        "C) O protocolo CSMA/CD detecta uma colisão e gerencia a retransmissão",
        "D) A rede entra em estado de espera até a colisão ser resolvida"
      ],
      answer: "C) O protocolo CSMA/CD detecta uma colisão e gerencia a retransmissão"
    },
    {
      question: "Qual técnica é usada para detectar erros em dados transmitidos pela camada de enlace?",
      options: [
        "A) Checksum",
        "B) DHCP",
        "C) ARP",
        "D) DNS"
      ],
      answer: "A) Checksum"
    },
    {
      question: "Como a camada de enlace trata os erros de transmissão de dados?",
      options: [
        "A) Ignora os erros e continua transmitindo",
        "B) Descarta os quadros com erros e pede uma retransmissão",
        "C) Corrige automaticamente os erros sem notificar o remetente",
        "D) Tenta reenviar apenas os bits que estavam incorretos"
      ],
      answer: "B) Descarta os quadros com erros e pede uma retransmissão"
    },
    {
      question: "O que acontece se o controle de fluxo não for implementado corretamente na camada de enlace?",
      options: [
        "A) O receptor pode ficar sobrecarregado com muitos dados",
        "B) A rede funcionará mais rapidamente",
        "C) Os quadros serão sempre retransmitidos",
        "D) O endereço MAC será alterado"
      ],
      answer: "A) O receptor pode ficar sobrecarregado com muitos dados"
    },
    {
      question: "Qual das seguintes opções NÃO é uma função da camada de enlace?",
      options: [
        "A) Controle de fluxo",
        "B) Controle de acesso ao meio",
        "C) Controle de erros",
        "D) Controle de endereçamento IP"
      ],
      answer: "D) Controle de endereçamento IP"
    },
    {
      question: "Como a camada de enlace organiza os dados para transmissão?",
      options: [
        "A) Em pacotes",
        "B) Em quadros",
        "C) Em datagramas",
        "D) Em segmentos"
      ],
      answer: "B) Em quadros"
    },
    {
      question: "O que faz o controle de acesso ao meio (MAC) na camada de enlace?",
      options: [
        "A) Define o caminho dos pacotes na rede",
        "B) Gerencia o acesso ao meio físico para evitar colisões",
        "C) Configura os endereços IP dos dispositivos",
        "D) Verifica a integridade dos pacotes"
      ],
      answer: "B) Gerencia o acesso ao meio físico para evitar colisões"
    },
    {
      question: "Qual método a camada de enlace utiliza para verificar a integridade dos dados?",
      options: [
        "A) Bits de paridade",
        "B) Checksum",
        "C) CRC",
        "D) Todos os acima"
      ],
      answer: "D) Todos os acima"
    },
  
    // Perguntas de bit de paridade
    {
      type: "parity",
      question: "Qual é o bit de paridade (par) correto para a seguinte sequência de bits: 1101010?",
      bits: "1101010",
      expectedAnswer: "1"
    },
    {
      type: "parity",
      question: "Qual é o bit de paridade (impar) correto para a seguinte sequência de bits: 1010101?",
      bits: "1010101",
      expectedAnswer: "1"
    },
    {
      type: "parity",
      question: "Qual é o bit de paridade (par) correto para a seguinte sequência de bits: 101110101",
      bits: "101110101",
      expectedAnswer: "0"
    },
  
    // Perguntas de checksum
    {
        type: "checksum",
        question: "Calcule o checksum da seguinte sequência de bits: 11010101 01100010",
        bits: ["11010101", "01100010"],
        expectedAnswer: "00110111"
      },
      {
        type: "checksum",
        question: "Calcule o checksum da seguinte sequência de bits: 10011010 10101100",
        bits: ["10011010", "10101100"],
        expectedAnswer: "01000110"
      },
      {
        type: "checksum",
        question: "Calcule o checksum da seguinte sequência de bits: 11110000 00001111",
        bits: ["11110000", "00001111"],
        expectedAnswer: "11111111"
      }
  ];
  
export default questions;
