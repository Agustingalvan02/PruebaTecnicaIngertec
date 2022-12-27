USE agustin1996

CREATE TABLE tresource_type(idResourceType INT NOT NULL AUTO_INCREMENT , created DATETIME,descrip VARCHAR(200), PRIMARY KEY(idResourceType));
CREATE TABLE tresource(idResource INT NOT NULL AUTO_INCREMENT, id_ResourceType INT NOT NULL,  created DATETIME,descrip VARCHAR(200), PRIMARY KEY(idResource), foreign key (id_ResourceType) references tresource_type(idResourceType) );