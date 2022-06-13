# VideoRecorder
Rendu final : 

- La caméra est bien enregistrée avec la librairie de Jean Charles (use-video-recorder).

- L'enregistrement de vidéos en séquences s'effectue aussi correctement, la suppression de toutes les séquences/une seule séquence fonctionne aussi très bien.

- Le hook personnalisé useSoundLevel(associé à useSoundLevelIndicator) permet de mesurer le son et de ressortir sa valeur en décibels.

- Le hook personnalisé useLightning permet de mesurer la luminosité de la caméra et de ressortir sa valeur en pourcentage. 

- Le hook personnalisé useVideoBlur permet de superposer un canvas sur la vidéo floutant l'arrière plan de celle-ci. Elle est ici adaptée 
au hook d'enregistrement use-video-recorder afin de proposer un enregistrement de la vidéo floutée. Cet enregistrement flouté ne fonctionne pas pour l'instant malgré un
gros avancement, j'ai trouvé une erreur que je n'ai pas su résoudre à temps. Deuxième soucis: avec un dispositif flex pour les placement des items, je ne peux pas définir
le placement du canvas afin qu'il superpose la vidéo, il y a encore un léger décalage; j'ai essayé de le résoudre mais je me suis concentré sur l'enregistrement. 
J'utilise la librairie whammy qui permet de transformer en vidéo toutes les frames du canvas stocké dans un tableau. 

- Le début de la fonction du regard, j'ai trouvé de bonne librairies: webgazer.js ainsi que GazeCloud API mais je n'ai pas su les importer dans le projet malgré les 
multiples tentatives différentes. 

- J'ai commencé à implémenter le positionnement du visage grâce au hook useFacialPlacement mais j'ai vite abandonné au profit du floutage et du regard. 

  Je suis désolé et très déçu de moi de ne pas avoir pu terminer le travail initialement demandé à temps, je vous présente mes excuses et j'espère quand même que mon 
travail vous servira plus tard. 

Ce fût vraiment un réel plaisir de travailler avec vous. 

