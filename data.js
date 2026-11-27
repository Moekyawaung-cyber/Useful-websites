const SITES = [
  {
    "id": 1,
    "name": "10 Minute Mail",
    "url": "https://10minutemail.com/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Temporary email inboxes that expire after a short time.",
      "pt": "Caixa de e-mail temporária que expira após pouco tempo.",
      "es": "Buzón de correo temporal que caduca después de un tiempo.",
      "fr": "Boîte e-mail temporaire qui expire après un court délai.",
      "de": "Temporäres E-Mail-Postfach, das nach kurzer Zeit abläuft."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Privacy",
      "Browser-Based"
    ],
    "searchTerms": [
      "temporary email",
      "disposable email"
    ]
  },
  {
    "id": 2,
    "name": "addy.io",
    "url": "https://addy.io/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Create anonymous email aliases and forward messages to your real inbox.",
      "pt": "Crie aliases de e-mail anônimos e encaminhe mensagens para sua caixa real.",
      "es": "Crea alias de correo anónimos y reenvía mensajes a tu buzón real.",
      "fr": "Créez des alias e-mail anonymes et transférez les messages vers votre vraie boîte.",
      "de": "Erstellen Sie anonyme E-Mail-Aliase und leiten Sie Nachrichten an Ihr echtes Postfach weiter."
    },
    "tags": [
      "Free Plan",
      "Privacy",
      "Open Source",
      "Account Required"
    ],
    "searchTerms": [
      "email alias",
      "anonymous email"
    ]
  },
  {
    "id": 3,
    "name": "Have I Been Pwned",
    "url": "https://haveibeenpwned.com/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Check whether an email address has appeared in known data breaches.",
      "pt": "Verifique se um endereço de e-mail apareceu em vazamentos conhecidos.",
      "es": "Comprueba si una dirección de correo apareció en filtraciones conocidas.",
      "fr": "Vérifiez si une adresse e-mail est apparue dans des fuites connues.",
      "de": "Prüfen Sie, ob eine E-Mail-Adresse in bekannten Datenlecks auftaucht."
    },
    "tags": [
      "Free",
      "Privacy",
      "No Sign-Up"
    ],
    "searchTerms": [
      "data breach",
      "breach checker",
      "pwned"
    ]
  },
  {
    "id": 4,
    "name": "JustDeleteMe",
    "url": "https://justdeleteme.xyz/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Find direct links and instructions for deleting online accounts.",
      "pt": "Encontre links diretos e instruções para excluir contas online.",
      "es": "Encuentra enlaces directos e instrucciones para eliminar cuentas online.",
      "fr": "Trouvez des liens directs et des instructions pour supprimer des comptes en ligne.",
      "de": "Finden Sie direkte Links und Anleitungen zum Löschen von Online-Konten."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Privacy"
    ],
    "searchTerms": [
      "delete account",
      "account deletion"
    ]
  },
  {
    "id": 5,
    "name": "Privnote",
    "url": "https://privnote.com/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Send notes that disappear after they are read.",
      "pt": "Envie notas que desaparecem depois de serem lidas.",
      "es": "Envía notas que desaparecen después de ser leídas.",
      "fr": "Envoyez des notes qui disparaissent après leur lecture.",
      "de": "Senden Sie Notizen, die nach dem Lesen verschwinden."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Privacy"
    ],
    "searchTerms": [
      "self destructing note",
      "burn after reading"
    ]
  },
  {
    "id": 6,
    "name": "SimpleLogin",
    "url": "https://simplelogin.io/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Create email aliases to protect your real address from spam and leaks.",
      "pt": "Crie aliases de e-mail para proteger seu endereço real contra spam e vazamentos.",
      "es": "Crea alias de correo para proteger tu dirección real del spam y las filtraciones.",
      "fr": "Créez des alias e-mail pour protéger votre adresse réelle contre le spam et les fuites.",
      "de": "Erstellen Sie E-Mail-Aliase, um Ihre echte Adresse vor Spam und Datenlecks zu schützen."
    },
    "tags": [
      "Free Plan",
      "Open Source",
      "Privacy",
      "Account Required"
    ],
    "searchTerms": [
      "email alias",
      "anonymous email"
    ]
  },
  {
    "id": 7,
    "name": "Terms of Service; Didn't Read",
    "url": "https://tosdr.org/",
    "category": "Privacy & Security",
    "desc": {
      "en": "See plain-language ratings and summaries of website terms and privacy policies.",
      "pt": "Veja avaliações e resumos em linguagem simples dos termos e políticas de privacidade.",
      "es": "Consulta valoraciones y resúmenes sencillos de términos y políticas de privacidad.",
      "fr": "Consultez des évaluations et résumés simples des conditions et politiques de confidentialité.",
      "de": "Sehen Sie verständliche Bewertungen und Zusammenfassungen von Nutzungsbedingungen und Datenschutzrichtlinien."
    },
    "tags": [
      "Free",
      "Privacy",
      "No Sign-Up"
    ],
    "searchTerms": []
  },
  {
    "id": 8,
    "name": "VirusTotal",
    "url": "https://www.virustotal.com/",
    "category": "Privacy & Security",
    "desc": {
      "en": "Analyze files, URLs and other indicators using multiple security engines and databases.",
      "pt": "Analise arquivos, URLs e outros indicadores usando vários mecanismos e bancos de dados de segurança.",
      "es": "Analiza archivos, URL y otros indicadores mediante múltiples motores y bases de datos de seguridad.",
      "fr": "Analysez des fichiers, URL et autres indicateurs à l’aide de plusieurs moteurs et bases de données de sécurité.",
      "de": "Analysieren Sie Dateien, URLs und andere Indikatoren mit mehreren Sicherheitsdiensten und Datenbanken."
    },
    "tags": [
      "Free",
      "Security",
      "Account Optional",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 9,
    "name": "Cleanup.pictures",
    "url": "https://cleanup.pictures/",
    "category": "Create & Edit",
    "desc": {
      "en": "Remove unwanted objects, people and text from images.",
      "pt": "Remova objetos, pessoas e textos indesejados de imagens.",
      "es": "Elimina objetos, personas y texto no deseados de imágenes.",
      "fr": "Supprimez les objets, personnes et textes indésirables des images.",
      "de": "Entfernen Sie unerwünschte Objekte, Personen und Texte aus Bildern."
    },
    "tags": [
      "Free Plan",
      "AI",
      "Browser-Based",
      "No Sign-Up"
    ],
    "searchTerms": []
  },
  {
    "id": 10,
    "name": "Coolors",
    "url": "https://coolors.co/",
    "category": "Create & Edit",
    "desc": {
      "en": "Generate, explore and save color palettes for your designs.",
      "pt": "Gere, explore e salve paletas de cores para seus projetos.",
      "es": "Genera, explora y guarda paletas de colores para tus diseños.",
      "fr": "Générez, explorez et enregistrez des palettes de couleurs pour vos créations.",
      "de": "Erstellen, entdecken und speichern Sie Farbpaletten für Ihre Designs."
    },
    "tags": [
      "Free Plan",
      "Browser-Based",
      "No Sign-Up"
    ],
    "searchTerms": []
  },
  {
    "id": 11,
    "name": "Excalidraw",
    "url": "https://excalidraw.com/",
    "category": "Create & Edit",
    "desc": {
      "en": "A collaborative whiteboard with a hand-drawn look.",
      "pt": "Um quadro branco colaborativo com aparência desenhada à mão.",
      "es": "Una pizarra colaborativa con aspecto dibujado a mano.",
      "fr": "Un tableau blanc collaboratif au style dessiné à la main.",
      "de": "Ein kollaboratives Whiteboard mit handgezeichnetem Stil."
    },
    "tags": [
      "Free",
      "Open Source",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 12,
    "name": "Method Draw",
    "url": "https://editor.method.ac/",
    "category": "Create & Edit",
    "desc": {
      "en": "A simple open-source SVG editor that runs in the browser.",
      "pt": "Um editor SVG simples e open source que roda no navegador.",
      "es": "Un editor SVG sencillo y de código abierto que funciona en el navegador.",
      "fr": "Un éditeur SVG simple et open source qui fonctionne dans le navigateur.",
      "de": "Ein einfacher Open-Source-SVG-Editor im Browser."
    },
    "tags": [
      "Free",
      "Open Source",
      "No Sign-Up",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 13,
    "name": "Pexels",
    "url": "https://www.pexels.com/",
    "category": "Create & Edit",
    "desc": {
      "en": "Free stock photos and videos for personal and commercial projects.",
      "pt": "Fotos e vídeos de banco gratuitos para projetos pessoais e comerciais.",
      "es": "Fotos y vídeos de stock gratuitos para proyectos personales y comerciales.",
      "fr": "Photos et vidéos libres pour des projets personnels et commerciaux.",
      "de": "Kostenlose Stockfotos und -videos für private und kommerzielle Projekte."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Media"
    ],
    "searchTerms": []
  },
  {
    "id": 14,
    "name": "Photopea",
    "url": "https://www.photopea.com/",
    "category": "Create & Edit",
    "desc": {
      "en": "A powerful browser-based image editor that opens PSD and many other formats.",
      "pt": "Um poderoso editor de imagens no navegador que abre PSD e muitos outros formatos.",
      "es": "Un potente editor de imágenes en el navegador que abre PSD y muchos otros formatos.",
      "fr": "Un puissant éditeur d'images dans le navigateur qui ouvre les PSD et bien d'autres formats.",
      "de": "Ein leistungsfähiger Bildeditor im Browser, der PSD und viele andere Formate öffnet."
    },
    "tags": [
      "Free Plan",
      "Browser-Based",
      "No Sign-Up"
    ],
    "searchTerms": []
  },
  {
    "id": 15,
    "name": "Squoosh",
    "url": "https://squoosh.app/",
    "category": "Create & Edit",
    "desc": {
      "en": "Compress and resize images in your browser with detailed control.",
      "pt": "Comprima e redimensione imagens no navegador com controle detalhado.",
      "es": "Comprime y redimensiona imágenes en el navegador con control detallado.",
      "fr": "Compressez et redimensionnez des images dans votre navigateur avec un contrôle précis.",
      "de": "Komprimieren und skalieren Sie Bilder im Browser mit detaillierter Kontrolle."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Privacy",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 16,
    "name": "TinyWow",
    "url": "https://tinywow.com/",
    "category": "Create & Edit",
    "desc": {
      "en": "A large collection of online tools for PDFs, images, video and more, with free access and optional premium features.",
      "pt": "Uma grande coleção de ferramentas online para PDFs, imagens, vídeo e muito mais, com acesso gratuito e recursos premium opcionais.",
      "es": "Una gran colección de herramientas online para PDF, imágenes, vídeo y más, con acceso gratuito y funciones premium opcionales.",
      "fr": "Une grande collection d’outils en ligne pour PDF, images, vidéo et plus, avec accès gratuit et fonctionnalités premium optionnelles.",
      "de": "Eine große Sammlung von Online-Tools für PDFs, Bilder, Videos und mehr, mit kostenlosem Zugang und optionalen Premium-Funktionen."
    },
    "tags": [
      "Free Plan",
      "No Sign-Up",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 17,
    "name": "Vectorizer.AI",
    "url": "https://vectorizer.ai/",
    "category": "Create & Edit",
    "desc": {
      "en": "Upload raster images to vectorize and preview the result in the browser.",
      "pt": "Envie imagens rasterizadas para vetorizar e visualizar o resultado no navegador.",
      "es": "Sube imágenes rasterizadas para vectorizarlas y previsualizar el resultado en el navegador.",
      "fr": "Importez des images matricielles pour les vectoriser et prévisualiser le résultat.",
      "de": "Laden Sie Rasterbilder hoch, um sie zu vektorisieren und das Ergebnis im Browser zu prüfen."
    },
    "tags": [
      "Free Preview",
      "Browser-Based",
      "Account Required for Download"
    ],
    "searchTerms": []
  },
  {
    "id": 18,
    "name": "Hugging Face Spaces",
    "url": "https://huggingface.co/spaces",
    "category": "AI & Automation",
    "desc": {
      "en": "Explore thousands of community-built AI demos that run in your browser.",
      "pt": "Explore milhares de demos de IA criadas pela comunidade e executadas no navegador.",
      "es": "Explora miles de demos de IA creadas por la comunidad y ejecutadas en el navegador.",
      "fr": "Explorez des milliers de démos d'IA créées par la communauté dans votre navigateur.",
      "de": "Entdecken Sie Tausende von KI-Demos aus der Community im Browser."
    },
    "tags": [
      "Free",
      "AI",
      "Interactive",
      "Browser-Based"
    ],
    "searchTerms": [
      "AI demos",
      "machine learning demos",
      "AI apps"
    ]
  },
  {
    "id": 19,
    "name": "Gemini Notebook",
    "url": "https://notebook.google/",
    "category": "AI & Automation",
    "desc": {
      "en": "A source-grounded research and learning assistant for exploring the information you provide.",
      "pt": "Um assistente de pesquisa e aprendizado fundamentado nas informações que você fornece.",
      "es": "Un asistente de investigación y aprendizaje basado en la información que proporcionas.",
      "fr": "Un assistant de recherche et d’apprentissage fondé sur les informations que vous fournissez.",
      "de": "Ein Recherche- und Lernassistent, der auf den von Ihnen bereitgestellten Informationen basiert."
    },
    "tags": [
      "AI",
      "Free Plan",
      "Account Required"
    ],
    "searchTerms": [
      "NotebookLM",
      "research assistant",
      "source grounded"
    ]
  },
  {
    "id": 20,
    "name": "Suno",
    "url": "https://suno.com/",
    "category": "AI & Automation",
    "desc": {
      "en": "Create original songs from text prompts with AI-generated music and vocals.",
      "pt": "Crie músicas originais a partir de prompts com música e vocais gerados por IA.",
      "es": "Crea canciones originales a partir de indicaciones con música y voces generadas por IA.",
      "fr": "Créez des chansons originales à partir de prompts avec musique et voix générées par IA.",
      "de": "Erstellen Sie aus Textvorgaben eigene Songs mit KI-Musik und Gesang."
    },
    "tags": [
      "AI",
      "Free Plan",
      "Account Required"
    ],
    "searchTerms": []
  },
  {
    "id": 21,
    "name": "Vocal Remover — Media.io",
    "url": "https://vocalremover.media.io/",
    "category": "AI & Automation",
    "desc": {
      "en": "Separate vocals and background music from audio and video with AI.",
      "pt": "Separe vocais e música de fundo de áudio e vídeo com IA.",
      "es": "Separa voces y música de fondo de audio y vídeo con IA.",
      "fr": "Séparez les voix et la musique de fond de fichiers audio et vidéo avec l'IA.",
      "de": "Trennen Sie Gesang und Hintergrundmusik aus Audio und Video mit KI."
    },
    "tags": [
      "AI",
      "Free Plan",
      "Browser-Based"
    ],
    "searchTerms": [
      "remove vocals",
      "acapella",
      "stem separator"
    ]
  },
  {
    "id": 22,
    "name": "AlternativeTo",
    "url": "https://alternativeto.net/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Find alternatives to software, apps and services you already use.",
      "pt": "Encontre alternativas para softwares, aplicativos e serviços que você já usa.",
      "es": "Encuentra alternativas al software, las apps y servicios que ya utilizas.",
      "fr": "Trouvez des alternatives aux logiciels, applications et services que vous utilisez.",
      "de": "Finden Sie Alternativen zu Software, Apps und Diensten, die Sie nutzen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Directory"
    ],
    "searchTerms": []
  },
  {
    "id": 23,
    "name": "Dictation.io",
    "url": "https://dictation.io/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Turn your speech into text directly in the browser.",
      "pt": "Transforme sua fala em texto diretamente no navegador.",
      "es": "Convierte tu voz en texto directamente en el navegador.",
      "fr": "Transformez votre voix en texte directement dans le navigateur.",
      "de": "Wandeln Sie Sprache direkt im Browser in Text um."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 24,
    "name": "draw.io",
    "url": "https://app.diagrams.net/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Create flowcharts, diagrams, network maps and other visual documents.",
      "pt": "Crie fluxogramas, diagramas, mapas de rede e outros documentos visuais.",
      "es": "Crea diagramas de flujo, diagramas, mapas de red y otros documentos visuales.",
      "fr": "Créez des organigrammes, diagrammes, cartes réseau et autres documents visuels.",
      "de": "Erstellen Sie Flussdiagramme, Diagramme, Netzwerkkarten und mehr."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 25,
    "name": "Downdetector",
    "url": "https://downdetector.com/",
    "category": "Everyday Tools",
    "desc": {
      "en": "See whether popular websites and services are experiencing outages.",
      "pt": "Veja se sites e serviços populares estão passando por instabilidades.",
      "es": "Comprueba si sitios y servicios populares están sufriendo interrupciones.",
      "fr": "Vérifiez si des sites et services populaires connaissent des pannes.",
      "de": "Sehen Sie, ob beliebte Websites und Dienste Störungen haben."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Live Data"
    ],
    "searchTerms": []
  },
  {
    "id": 26,
    "name": "Fast.com",
    "url": "https://fast.com/",
    "category": "Everyday Tools",
    "desc": {
      "en": "A simple internet speed test focused on download speed.",
      "pt": "Um teste de velocidade de internet simples, focado na velocidade de download.",
      "es": "Una prueba de velocidad de Internet sencilla centrada en la descarga.",
      "fr": "Un test de vitesse Internet simple axé sur le débit descendant.",
      "de": "Ein einfacher Internet-Geschwindigkeitstest mit Fokus auf Download."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 27,
    "name": "iLovePDF",
    "url": "https://www.ilovepdf.com/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Merge, split, compress, convert and edit PDF files online.",
      "pt": "Mescle, divida, comprima, converta e edite arquivos PDF online.",
      "es": "Une, divide, comprime, convierte y edita archivos PDF online.",
      "fr": "Fusionnez, divisez, compressez, convertissez et modifiez des PDF en ligne.",
      "de": "PDFs online zusammenführen, teilen, komprimieren, konvertieren und bearbeiten."
    },
    "tags": [
      "Free Plan",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 28,
    "name": "myNoise",
    "url": "https://mynoise.net/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Generate adjustable ambient sounds for focus, relaxation and sleep.",
      "pt": "Gere sons ambientes ajustáveis para foco, relaxamento e sono.",
      "es": "Genera sonidos ambientales ajustables para concentrarte, relajarte y dormir.",
      "fr": "Générez des sons d'ambiance réglables pour vous concentrer, vous détendre et dormir.",
      "de": "Erzeugen Sie anpassbare Umgebungsgeräusche für Fokus, Entspannung und Schlaf."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 29,
    "name": "Speedtest",
    "url": "https://www.speedtest.net/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Measure internet download speed, upload speed, latency and more.",
      "pt": "Meça download, upload, latência e outros dados da sua conexão.",
      "es": "Mide velocidad de descarga, subida, latencia y más de tu conexión.",
      "fr": "Mesurez les débits descendant et montant, la latence et plus.",
      "de": "Messen Sie Download, Upload, Latenz und weitere Verbindungsdaten."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 30,
    "name": "The Wayback Machine",
    "url": "https://web.archive.org/",
    "category": "Everyday Tools",
    "desc": {
      "en": "View archived versions of websites from the past.",
      "pt": "Veja versões arquivadas de sites como eles eram no passado.",
      "es": "Consulta versiones archivadas de sitios web del pasado.",
      "fr": "Consultez des versions archivées de sites web du passé.",
      "de": "Sehen Sie archivierte Versionen von Websites aus der Vergangenheit."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Archive"
    ],
    "searchTerms": [
      "web archive",
      "internet archive",
      "old websites"
    ]
  },
  {
    "id": 31,
    "name": "WeTransfer",
    "url": "https://wetransfer.com/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Send large files through shareable links with minimal setup.",
      "pt": "Envie arquivos grandes por links compartilháveis com configuração mínima.",
      "es": "Envía archivos grandes mediante enlaces compartibles con una configuración mínima.",
      "fr": "Envoyez de gros fichiers via des liens partageables avec peu de configuration.",
      "de": "Senden Sie große Dateien über teilbare Links mit minimalem Aufwand."
    },
    "tags": [
      "Free Plan",
      "No Sign-Up",
      "File Sharing"
    ],
    "searchTerms": []
  },
  {
    "id": 32,
    "name": "Wormhole",
    "url": "https://wormhole.app/",
    "category": "Everyday Tools",
    "desc": {
      "en": "Share files with end-to-end encrypted links that expire.",
      "pt": "Compartilhe arquivos com links criptografados de ponta a ponta que expiram.",
      "es": "Comparte archivos con enlaces cifrados de extremo a extremo que caducan.",
      "fr": "Partagez des fichiers via des liens chiffrés de bout en bout qui expirent.",
      "de": "Teilen Sie Dateien über Ende-zu-Ende-verschlüsselte, ablaufende Links."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Privacy"
    ],
    "searchTerms": []
  },
  {
    "id": 33,
    "name": "GeoGuessr",
    "url": "https://www.geoguessr.com/",
    "category": "Gaming",
    "desc": {
      "en": "Guess locations around the world using Street View-style geography challenges.",
      "pt": "Adivinhe locais pelo mundo em desafios de geografia baseados em imagens de rua.",
      "es": "Adivina lugares del mundo en desafíos de geografía basados en imágenes de calles.",
      "fr": "Devinez des lieux du monde entier dans des défis géographiques basés sur des vues de rue.",
      "de": "Erraten Sie Orte weltweit in Geografie-Herausforderungen mit Straßenansichten."
    },
    "tags": [
      "Free Plan",
      "Interactive",
      "Account Optional"
    ],
    "searchTerms": []
  },
  {
    "id": 34,
    "name": "HowLongToBeat",
    "url": "https://howlongtobeat.com/",
    "category": "Gaming",
    "desc": {
      "en": "See estimated completion times for games and compare play lengths.",
      "pt": "Veja estimativas de tempo para terminar jogos e compare durações.",
      "es": "Consulta tiempos estimados para terminar juegos y compara duraciones.",
      "fr": "Consultez les durées estimées des jeux et comparez-les.",
      "de": "Sehen Sie geschätzte Spieldauern und vergleichen Sie Spielzeiten."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Database"
    ],
    "searchTerms": [
      "game length",
      "how long is the game"
    ]
  },
  {
    "id": 35,
    "name": "IsThereAnyDeal",
    "url": "https://isthereanydeal.com/",
    "category": "Gaming",
    "desc": {
      "en": "Compare PC game prices and track deals across digital stores.",
      "pt": "Compare preços de jogos para PC e acompanhe promoções em várias lojas digitais.",
      "es": "Compara precios de juegos de PC y sigue ofertas en varias tiendas digitales.",
      "fr": "Comparez les prix des jeux PC et suivez les offres de plusieurs boutiques.",
      "de": "Vergleichen Sie PC-Spielepreise und verfolgen Sie Angebote mehrerer Shops."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Price Tracking"
    ],
    "searchTerms": [
      "game prices",
      "sales",
      "deals"
    ]
  },
  {
    "id": 36,
    "name": "PCPartPicker",
    "url": "https://pcpartpicker.com/",
    "category": "Gaming",
    "desc": {
      "en": "Plan PC builds, compare parts and check compatibility.",
      "pt": "Planeje montagens de PC, compare peças e verifique compatibilidade.",
      "es": "Planifica PCs, compara componentes y comprueba la compatibilidad.",
      "fr": "Planifiez des configurations PC, comparez les composants et vérifiez la compatibilité.",
      "de": "Planen Sie PC-Konfigurationen, vergleichen Sie Teile und prüfen Sie Kompatibilität."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Database"
    ],
    "searchTerms": [
      "PC parts",
      "build PC",
      "compatibility"
    ]
  },
  {
    "id": 37,
    "name": "ProtonDB",
    "url": "https://www.protondb.com/",
    "category": "Gaming",
    "desc": {
      "en": "Check how Windows games perform on Linux and Steam Deck.",
      "pt": "Veja como jogos de Windows funcionam no Linux e no Steam Deck.",
      "es": "Comprueba cómo funcionan juegos de Windows en Linux y Steam Deck.",
      "fr": "Vérifiez comment les jeux Windows fonctionnent sous Linux et Steam Deck.",
      "de": "Prüfen Sie, wie Windows-Spiele unter Linux und Steam Deck laufen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Database"
    ],
    "searchTerms": [
      "Linux gaming",
      "Steam Linux compatibility"
    ]
  },
  {
    "id": 38,
    "name": "SteamDB",
    "url": "https://steamdb.info/",
    "category": "Gaming",
    "desc": {
      "en": "Explore Steam prices, player counts, charts, history and database data.",
      "pt": "Explore preços, jogadores, gráficos, histórico e dados do Steam.",
      "es": "Explora precios, jugadores, gráficos, historial y datos de Steam.",
      "fr": "Explorez les prix, joueurs, graphiques, historiques et données Steam.",
      "de": "Entdecken Sie Steam-Preise, Spielerzahlen, Diagramme und Verlaufsdaten."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Live Data"
    ],
    "searchTerms": [
      "Steam database",
      "Steam charts"
    ]
  },
  {
    "id": 39,
    "name": "Class Central",
    "url": "https://www.classcentral.com/",
    "category": "Learning",
    "desc": {
      "en": "Search and compare online courses from universities and learning platforms.",
      "pt": "Pesquise e compare cursos online de universidades e plataformas de ensino.",
      "es": "Busca y compara cursos online de universidades y plataformas educativas.",
      "fr": "Recherchez et comparez des cours en ligne d'universités et plateformes éducatives.",
      "de": "Suchen und vergleichen Sie Onlinekurse von Universitäten und Lernplattformen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Directory"
    ],
    "searchTerms": [
      "online courses",
      "MOOCs"
    ]
  },
  {
    "id": 40,
    "name": "DeepL",
    "url": "https://www.deepl.com/",
    "category": "Learning",
    "desc": {
      "en": "Translate text and documents with a focus on natural-sounding language.",
      "pt": "Traduza textos e documentos com foco em linguagem natural.",
      "es": "Traduce textos y documentos con énfasis en un lenguaje natural.",
      "fr": "Traduisez textes et documents avec un accent sur un rendu naturel.",
      "de": "Übersetzen Sie Texte und Dokumente mit Fokus auf natürliche Sprache."
    },
    "tags": [
      "Free Plan",
      "Browser-Based"
    ],
    "searchTerms": []
  },
  {
    "id": 41,
    "name": "Desmos",
    "url": "https://www.desmos.com/calculator",
    "category": "Learning",
    "desc": {
      "en": "Explore functions and mathematics with an interactive graphing calculator.",
      "pt": "Explore funções e matemática com uma calculadora gráfica interativa.",
      "es": "Explora funciones y matemáticas con una calculadora gráfica interactiva.",
      "fr": "Explorez les fonctions et les mathématiques avec une calculatrice graphique interactive.",
      "de": "Erkunden Sie Funktionen und Mathematik mit einem interaktiven Grafikrechner."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 42,
    "name": "Khan Academy",
    "url": "https://www.khanacademy.org/",
    "category": "Learning",
    "desc": {
      "en": "Free lessons and practice across math, science, humanities and more.",
      "pt": "Aulas e exercícios gratuitos de matemática, ciências, humanas e mais.",
      "es": "Lecciones y ejercicios gratuitos de matemáticas, ciencias, humanidades y más.",
      "fr": "Cours et exercices gratuits de mathématiques, sciences, sciences humaines et plus.",
      "de": "Kostenlose Lektionen und Übungen zu Mathematik, Naturwissenschaften, Geisteswissenschaften und mehr."
    },
    "tags": [
      "Free",
      "Account Optional",
      "Education"
    ],
    "searchTerms": []
  },
  {
    "id": 43,
    "name": "Monkeytype",
    "url": "https://monkeytype.com/",
    "category": "Learning",
    "desc": {
      "en": "A fast, customizable typing test with detailed performance statistics.",
      "pt": "Um teste de digitação rápido e personalizável com estatísticas detalhadas.",
      "es": "Una prueba de mecanografía rápida y personalizable con estadísticas detalladas.",
      "fr": "Un test de frappe rapide et personnalisable avec des statistiques détaillées.",
      "de": "Ein schneller, anpassbarer Tipp-Test mit detaillierten Statistiken."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 44,
    "name": "MIT OpenCourseWare",
    "url": "https://ocw.mit.edu/",
    "category": "Learning",
    "desc": {
      "en": "Free course materials from MIT, available openly online.",
      "pt": "Materiais gratuitos de cursos do MIT disponíveis abertamente online.",
      "es": "Materiales gratuitos de cursos del MIT disponibles abiertamente en línea.",
      "fr": "Supports de cours gratuits du MIT accessibles librement en ligne.",
      "de": "Kostenlose MIT-Kursmaterialien, frei online verfügbar."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Open Access"
    ],
    "searchTerms": []
  },
  {
    "id": 45,
    "name": "Project Gutenberg",
    "url": "https://www.gutenberg.org/",
    "category": "Learning",
    "desc": {
      "en": "A huge library of free public-domain ebooks.",
      "pt": "Uma grande biblioteca de e-books gratuitos em domínio público.",
      "es": "Una enorme biblioteca de libros electrónicos gratuitos de dominio público.",
      "fr": "Une immense bibliothèque de livres électroniques gratuits du domaine public.",
      "de": "Eine große Bibliothek kostenloser gemeinfreier E-Books."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Open Access"
    ],
    "searchTerms": []
  },
  {
    "id": 46,
    "name": "Wolfram|Alpha",
    "url": "https://www.wolframalpha.com/",
    "category": "Learning",
    "desc": {
      "en": "Ask computational questions and explore answers across many fields.",
      "pt": "Faça perguntas computacionais e explore respostas em várias áreas.",
      "es": "Haz preguntas computacionales y explora respuestas en muchas áreas.",
      "fr": "Posez des questions computationnelles et explorez des réponses dans de nombreux domaines.",
      "de": "Stellen Sie Rechenfragen und erkunden Sie Antworten aus vielen Bereichen."
    },
    "tags": [
      "Free Plan",
      "Browser-Based",
      "Knowledge Tool"
    ],
    "searchTerms": [
      "computational knowledge",
      "math solver"
    ]
  },
  {
    "id": 47,
    "name": "YouGlish",
    "url": "https://youglish.com/",
    "category": "Learning",
    "desc": {
      "en": "Hear words and phrases pronounced in real YouTube clips.",
      "pt": "Ouça palavras e frases pronunciadas em clipes reais do YouTube.",
      "es": "Escucha palabras y frases pronunciadas en clips reales de YouTube.",
      "fr": "Écoutez des mots et expressions prononcés dans de vrais extraits YouTube.",
      "de": "Hören Sie Wörter und Ausdrücke in echten YouTube-Clips ausgesprochen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Language"
    ],
    "searchTerms": [
      "pronunciation",
      "language pronunciation"
    ]
  },
  {
    "id": 48,
    "name": "Earth Nullschool",
    "url": "https://earth.nullschool.net/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Explore animated global maps of wind, weather and ocean conditions.",
      "pt": "Explore mapas globais animados de vento, clima e condições oceânicas.",
      "es": "Explora mapas globales animados de viento, clima y condiciones oceánicas.",
      "fr": "Explorez des cartes mondiales animées du vent, du temps et des océans.",
      "de": "Erkunden Sie animierte globale Karten von Wind, Wetter und Meeresbedingungen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": [
      "wind map",
      "earth weather",
      "air currents"
    ]
  },
  {
    "id": 49,
    "name": "Flightradar24",
    "url": "https://www.flightradar24.com/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Track aircraft around the world on a live interactive map.",
      "pt": "Acompanhe aeronaves pelo mundo em um mapa interativo ao vivo.",
      "es": "Sigue aviones por todo el mundo en un mapa interactivo en vivo.",
      "fr": "Suivez les avions dans le monde sur une carte interactive en direct.",
      "de": "Verfolgen Sie Flugzeuge weltweit auf einer interaktiven Live-Karte."
    },
    "tags": [
      "Free Plan",
      "Interactive",
      "Live Data"
    ],
    "searchTerms": []
  },
  {
    "id": 50,
    "name": "MarineTraffic",
    "url": "https://www.marinetraffic.com/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Track ships and vessels around the world on a live map.",
      "pt": "Acompanhe navios e embarcações pelo mundo em um mapa ao vivo.",
      "es": "Sigue barcos y buques de todo el mundo en un mapa en vivo.",
      "fr": "Suivez les navires et bateaux du monde entier sur une carte en direct.",
      "de": "Verfolgen Sie Schiffe weltweit auf einer Live-Karte."
    },
    "tags": [
      "Free Plan",
      "Interactive",
      "Live Data"
    ],
    "searchTerms": []
  },
  {
    "id": 51,
    "name": "MapCrunch",
    "url": "https://www.mapcrunch.com/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Jump to a random location using Street View imagery.",
      "pt": "Vá para um local aleatório usando imagens do Street View.",
      "es": "Salta a una ubicación aleatoria usando imágenes de Street View.",
      "fr": "Découvrez un lieu aléatoire grâce aux images Street View.",
      "de": "Springen Sie zu einem zufälligen Ort mit Street-View-Bildern."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 52,
    "name": "NASA Eyes",
    "url": "https://science.nasa.gov/eyes/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Explore the solar system and NASA missions through interactive 3D experiences.",
      "pt": "Explore o Sistema Solar e as missões da NASA por meio de experiências interativas em 3D.",
      "es": "Explora el sistema solar y las misiones de la NASA mediante experiencias interactivas en 3D.",
      "fr": "Explorez le système solaire et les missions de la NASA grâce à des expériences interactives en 3D.",
      "de": "Erkunden Sie das Sonnensystem und NASA-Missionen mit interaktiven 3D-Erlebnissen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 53,
    "name": "Radio Garden",
    "url": "https://radio.garden/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Spin a globe and listen to live radio stations around the world.",
      "pt": "Gire um globo e ouça rádios ao vivo do mundo inteiro.",
      "es": "Gira un globo y escucha emisoras de radio en directo de todo el mundo.",
      "fr": "Faites tourner un globe et écoutez des radios en direct du monde entier.",
      "de": "Drehen Sie einen Globus und hören Sie Live-Radiosender aus aller Welt."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 54,
    "name": "Stellarium Web",
    "url": "https://stellarium-web.org/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Explore an interactive planetarium in your browser.",
      "pt": "Explore um planetário interativo diretamente no navegador.",
      "es": "Explora un planetario interactivo directamente en el navegador.",
      "fr": "Explorez un planétarium interactif directement dans votre navigateur.",
      "de": "Erkunden Sie ein interaktives Planetarium direkt im Browser."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 55,
    "name": "The True Size",
    "url": "https://www.thetruesize.com/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Drag countries around the map to compare their true apparent sizes.",
      "pt": "Arraste países pelo mapa para comparar seus tamanhos aparentes reais.",
      "es": "Mueve países por el mapa para comparar sus tamaños aparentes reales.",
      "fr": "Déplacez les pays sur la carte pour comparer leur taille apparente réelle.",
      "de": "Verschieben Sie Länder auf der Karte und vergleichen Sie ihre tatsächliche scheinbare Größe."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": [
      "country size",
      "map projection",
      "country comparison"
    ]
  },
  {
    "id": 56,
    "name": "Ventusky",
    "url": "https://www.ventusky.com/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Explore interactive maps of weather, wind, temperature and forecasts.",
      "pt": "Explore mapas interativos de clima, vento, temperatura e previsões.",
      "es": "Explora mapas interactivos de clima, viento, temperatura y pronósticos.",
      "fr": "Explorez des cartes interactives de météo, vent, température et prévisions.",
      "de": "Erkunden Sie interaktive Karten für Wetter, Wind, Temperatur und Vorhersagen."
    },
    "tags": [
      "Free Plan",
      "Interactive",
      "Live Data"
    ],
    "searchTerms": []
  },
  {
    "id": 57,
    "name": "Windy",
    "url": "https://www.windy.com/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Explore detailed interactive maps for weather, wind and forecasts.",
      "pt": "Explore mapas interativos detalhados de clima, vento e previsões.",
      "es": "Explora mapas interactivos detallados de clima, viento y pronósticos.",
      "fr": "Explorez des cartes interactives détaillées de météo, vent et prévisions.",
      "de": "Erkunden Sie detaillierte interaktive Wetter-, Wind- und Prognosekarten."
    },
    "tags": [
      "Free Plan",
      "Interactive",
      "Live Data"
    ],
    "searchTerms": []
  },
  {
    "id": 58,
    "name": "Histography",
    "url": "https://histography.io/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Explore world history as an interactive timeline of Wikipedia events.",
      "pt": "Explore a história mundial como uma linha do tempo interativa de eventos da Wikipédia.",
      "es": "Explora la historia mundial como una línea temporal interactiva de eventos de Wikipedia.",
      "fr": "Explorez l'histoire mondiale comme une frise interactive d'événements Wikipédia.",
      "de": "Erkunden Sie die Weltgeschichte als interaktive Zeitleiste von Wikipedia-Ereignissen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 59,
    "name": "Internet Map",
    "url": "https://internet-map.net/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Explore a visual map of websites represented as a constellation of traffic.",
      "pt": "Explore um mapa visual de sites representados como uma constelação de tráfego.",
      "es": "Explora un mapa visual de sitios representados como una constelación de tráfico.",
      "fr": "Explorez une carte visuelle des sites représentés comme une constellation de trafic.",
      "de": "Erkunden Sie eine visuelle Karte von Websites als Verkehrskonstellation."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 60,
    "name": "Lightyear.fm",
    "url": "https://lightyear.fm/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Scroll away from Earth and discover music associated with distant stars.",
      "pt": "Afaste-se da Terra e descubra músicas associadas a estrelas distantes.",
      "es": "Aléjate de la Tierra y descubre música asociada a estrellas lejanas.",
      "fr": "Éloignez-vous de la Terre et découvrez des musiques associées à des étoiles lointaines.",
      "de": "Entfernen Sie sich von der Erde und entdecken Sie Musik, die mit fernen Sternen verbunden ist."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 61,
    "name": "Neal.fun",
    "url": "https://neal.fun/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "A collection of playful interactive experiments built for curiosity and fun.",
      "pt": "Uma coleção de experimentos interativos criativos feitos para curiosidade e diversão.",
      "es": "Una colección de experimentos interactivos creativos para la curiosidad y la diversión.",
      "fr": "Une collection d'expériences interactives créatives pour la curiosité et le plaisir.",
      "de": "Eine Sammlung spielerischer interaktiver Experimente für Neugier und Spaß."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 62,
    "name": "Pointer Pointer",
    "url": "https://pointerpointer.com/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Move your cursor and get a photo of someone pointing toward it.",
      "pt": "Mova o cursor e veja uma foto de alguém apontando para ele.",
      "es": "Mueve el cursor y recibe una foto de alguien señalándolo.",
      "fr": "Déplacez le curseur et obtenez une photo de quelqu'un qui le pointe.",
      "de": "Bewegen Sie den Cursor und sehen Sie ein Foto von jemandem, der darauf zeigt."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": [
      "pointing people",
      "cursor experiment"
    ]
  },
  {
    "id": 63,
    "name": "Quick, Draw!",
    "url": "https://quickdraw.withgoogle.com/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Draw simple objects while a neural network tries to guess them.",
      "pt": "Desenhe objetos simples enquanto uma rede neural tenta adivinhar o que são.",
      "es": "Dibuja objetos sencillos mientras una red neuronal intenta adivinarlos.",
      "fr": "Dessinez des objets simples pendant qu'un réseau neuronal tente de les deviner.",
      "de": "Zeichnen Sie einfache Objekte, während ein neuronales Netz sie errät."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "AI",
      "Interactive"
    ],
    "searchTerms": [
      "drawing game",
      "machine learning game"
    ]
  },
  {
    "id": 64,
    "name": "Scale of the Universe",
    "url": "https://scaleofuniverse.com/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Zoom through objects and structures from the tiny to the cosmic scale.",
      "pt": "Aproxime e afaste para explorar do muito pequeno ao universo.",
      "es": "Amplía y aleja para explorar desde lo diminuto hasta el universo.",
      "fr": "Zoomez du minuscule à l'échelle de l'univers.",
      "de": "Zoomen Sie vom Kleinsten bis zur kosmischen Größenordnung."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": [
      "scale",
      "size of universe"
    ]
  },
  {
    "id": 65,
    "name": "The Useless Web",
    "url": "https://theuselessweb.com/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Press one button to be sent to a random pointless website.",
      "pt": "Clique em um botão e vá para um site aleatório e inútil.",
      "es": "Pulsa un botón y visita un sitio web aleatorio y absurdo.",
      "fr": "Cliquez sur un bouton et découvrez un site aléatoire et inutile.",
      "de": "Klicken Sie auf einen Button und landen Sie auf einer zufälligen sinnlosen Website."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 66,
    "name": "Windows93",
    "url": "https://windows93.net/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Explore a surreal fake operating system packed with games and strange web toys.",
      "pt": "Explore um sistema operacional fictício e surreal cheio de jogos e experiências estranhas.",
      "es": "Explora un sistema operativo ficticio y surrealista lleno de juegos y experiencias extrañas.",
      "fr": "Explorez un faux système d'exploitation surréaliste rempli de jeux et d'expériences étranges.",
      "de": "Erkunden Sie ein surreales fiktives Betriebssystem voller Spiele und seltsamer Web-Spielzeuge."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  },
  {
    "id": 67,
    "name": "Zoomquilt",
    "url": "https://zoomquilt.org/",
    "category": "Rabbit Holes",
    "desc": {
      "en": "Explore a collaborative painting that seems to zoom forever.",
      "pt": "Explore uma pintura colaborativa que parece ampliar para sempre.",
      "es": "Explora una pintura colaborativa que parece acercarse infinitamente.",
      "fr": "Explorez une peinture collaborative qui semble zoomer à l'infini.",
      "de": "Erkunden Sie ein gemeinschaftliches Gemälde, das scheinbar endlos zoomt."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive"
    ],
    "searchTerms": []
  }

  {
    "id": 68,
    "name": "StagePeek",
    "url": "https://stagepeek.live/",
    "category": "Maps & Weather",
    "desc": {
      "en": "Preview interactive 2D seating charts and 3D concert stage views across 201 venues with 1x–10x zoom.",
      "pt": "Visualize mapas de assentos 2D interativos e vistas 3D de palcos em 201 casas de show com zoom de 1x a 10x.",
      "es": "Explora mapas de asientos 2D interactivos y vistas 3D del escenario en 201 recintos con zoom de 1x a 10x.",
      "fr": "Prévisualisez des plans de salle 2D interactifs et des vues 3D de scène dans 201 salles avec zoom 1x–10x.",
      "de": "Interaktive 2D-Sitzpläne und 3D-Bühnenansichten für 201 Veranstaltungsorte mit 1x–10x-Zoom vorab prüfen."
    },
    "tags": [
      "Free",
      "No Sign-Up",
      "Interactive",
      "Browser-Based"
    ],
    "searchTerms": [
      "concert seat view",
      "seating chart",
      "3d venue",
      "stage view"
    ]
  }
];
const CATEGORIES = ["AI & Automation", "Create & Edit", "Everyday Tools", "Gaming", "Learning", "Maps & Weather", "Privacy & Security", "Rabbit Holes"];
const CATEGORY_LABELS = {"en": {"AI & Automation": "AI & Automation", "Create & Edit": "Create & Edit", "Everyday Tools": "Everyday Tools", "Gaming": "Gaming", "Learning": "Learning", "Maps & Weather": "Maps & Weather", "Privacy & Security": "Privacy & Security", "Rabbit Holes": "Rabbit Holes"}, "pt": {"AI & Automation": "IA & Automação", "Create & Edit": "Criar & Editar", "Everyday Tools": "Ferramentas do Dia a Dia", "Gaming": "Jogos", "Learning": "Aprendizado", "Maps & Weather": "Mapas & Clima", "Privacy & Security": "Privacidade & Segurança", "Rabbit Holes": "Descobertas"}, "es": {"AI & Automation": "IA & Automatización", "Create & Edit": "Crear & Editar", "Everyday Tools": "Herramientas Cotidianas", "Gaming": "Juegos", "Learning": "Aprendizaje", "Maps & Weather": "Mapas y Clima", "Privacy & Security": "Privacidad y Seguridad", "Rabbit Holes": "Descubrimientos"}, "fr": {"AI & Automation": "IA & Automatisation", "Create & Edit": "Créer & Modifier", "Everyday Tools": "Outils du Quotidien", "Gaming": "Jeux", "Learning": "Apprentissage", "Maps & Weather": "Cartes & Météo", "Privacy & Security": "Confidentialité & Sécurité", "Rabbit Holes": "Découvertes"}, "de": {"AI & Automation": "KI & Automatisierung", "Create & Edit": "Erstellen & Bearbeiten", "Everyday Tools": "Alltagswerkzeuge", "Gaming": "Gaming", "Learning": "Lernen", "Maps & Weather": "Karten & Wetter", "Privacy & Security": "Datenschutz & Sicherheit", "Rabbit Holes": "Entdeckungen"}};
const TAG_LABELS = {"Free": {"en": "Free", "pt": "Grátis", "es": "Gratis", "fr": "Gratuit", "de": "Kostenlos"}, "Free Plan": {"en": "Free Plan", "pt": "Plano Grátis", "es": "Plan Gratis", "fr": "Formule gratuite", "de": "Kostenloser Plan"}, "Free Preview": {"en": "Free Preview", "pt": "Prévia Grátis", "es": "Vista previa gratis", "fr": "Aperçu gratuit", "de": "Kostenlose Vorschau"}, "No Sign-Up": {"en": "No Sign-Up", "pt": "Sem Cadastro", "es": "Sin Registro", "fr": "Sans inscription", "de": "Ohne Anmeldung"}, "Privacy": {"en": "Privacy", "pt": "Privacidade", "es": "Privacidad", "fr": "Confidentialité", "de": "Datenschutz"}, "Open Source": {"en": "Open Source", "pt": "Open Source", "es": "Código Abierto", "fr": "Open Source", "de": "Open Source"}, "Browser-Based": {"en": "Browser-Based", "pt": "No Navegador", "es": "En el Navegador", "fr": "Dans le navigateur", "de": "Browserbasiert"}, "Account Required": {"en": "Account Required", "pt": "Exige Conta", "es": "Requiere Cuenta", "fr": "Compte requis", "de": "Konto erforderlich"}, "Account Optional": {"en": "Account Optional", "pt": "Conta Opcional", "es": "Cuenta Opcional", "fr": "Compte facultatif", "de": "Konto optional"}, "Account Required for Download": {"en": "Account Required for Download", "pt": "Conta para Baixar", "es": "Cuenta para Descargar", "fr": "Compte pour télécharger", "de": "Konto zum Herunterladen"}, "AI": {"en": "AI", "pt": "IA", "es": "IA", "fr": "IA", "de": "KI"}, "Interactive": {"en": "Interactive", "pt": "Interativo", "es": "Interactivo", "fr": "Interactif", "de": "Interaktiv"}, "Security": {"en": "Security", "pt": "Segurança", "es": "Seguridad", "fr": "Sécurité", "de": "Sicherheit"}, "Media": {"en": "Media", "pt": "Mídia", "es": "Medios", "fr": "Média", "de": "Medien"}, "Shopping Tool": {"en": "Shopping Tool", "pt": "Compras", "es": "Compras", "fr": "Achats", "de": "Shopping"}, "Live Data": {"en": "Live Data", "pt": "Dados ao Vivo", "es": "Datos en Vivo", "fr": "Données en direct", "de": "Live-Daten"}, "Archive": {"en": "Archive", "pt": "Arquivo", "es": "Archivo", "fr": "Archive", "de": "Archiv"}, "File Sharing": {"en": "File Sharing", "pt": "Compartilhamento", "es": "Compartir Archivos", "fr": "Partage de fichiers", "de": "Dateifreigabe"}, "Database": {"en": "Database", "pt": "Banco de Dados", "es": "Base de Datos", "fr": "Base de données", "de": "Datenbank"}, "Price Tracking": {"en": "Price Tracking", "pt": "Histórico de Preços", "es": "Seguimiento de Precios", "fr": "Suivi des prix", "de": "Preisverfolgung"}, "Education": {"en": "Education", "pt": "Educação", "es": "Educación", "fr": "Éducation", "de": "Bildung"}, "Open Access": {"en": "Open Access", "pt": "Acesso Aberto", "es": "Acceso Abierto", "fr": "Accès libre", "de": "Offener Zugang"}, "Knowledge Tool": {"en": "Knowledge Tool", "pt": "Conhecimento", "es": "Conocimiento", "fr": "Connaissances", "de": "Wissenswerkzeug"}, "Language": {"en": "Language", "pt": "Idiomas", "es": "Idiomas", "fr": "Langues", "de": "Sprachen"}};
