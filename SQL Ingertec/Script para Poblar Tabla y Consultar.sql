SELECT idResource
INSERT INTO `agustin1996`.`tresource`
(
`created`,
`descrip`,
`id_ResourceType`)
VALUES
(NOW(),
'Como usar Bootstrap dentro de React',1);

INSERT INTO `agustin1996`.`tresource`
(
`created`,
`descrip`,
`id_ResourceType`)
VALUES
(NOW(),
'Bootstrap modals',1);

INSERT INTO `agustin1996`.`tresource`
(
`created`,
`descrip`,
`id_ResourceType`)
VALUES
(NOW(),
'React Hooks',2);


INSERT INTO `agustin1996`.`tresource`
(
`created`,
`descrip`,
`id_ResourceType`)
VALUES
(NOW(),
'React-Bootstrap',2);

INSERT INTO `agustin1996`.`tresource`
(
`created`,
`descrip`,
`id_ResourceType`)
VALUES
(NOW(),
'Como hacer llamadas AJAX para Json',3);
INSERT INTO `agustin1996`.`tresource`
(
`created`,
`descrip`,
`id_ResourceType`)
VALUES
(NOW(),
'Usando Async y Fetch',4);

SELECT COUNT(*) FROM tresource WHERE id_ResourceType=(SELECT id_ResourceType FROM tresource_type WHERE descrip='video')

SELECT * FROM tresource t INNER JOIN tresource_type tt ON t.id_ResourceType = tt.idResourceType WHERE tt.descrip= 'video'

SELECT * FROM tresource t INNER JOIN tresource_type tt ON t.id_ResourceType = tt.idResourceType