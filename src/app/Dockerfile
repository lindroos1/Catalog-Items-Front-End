
FROM node:14 as Angu
COPY ./Catalog-Items-Front-End dockerA
WORKDIR /dockerA
RUN npm run build

FROM maven:3.8.2 as Spr
COPY ./Catalog-Items-Vmware-FinalTask ss 
COPY --from=Angu dockerA/dist/Catalog-Items-Front-End/ ss/src/main/resources/static/
RUN mvn -f /ss/pom.xml clean package


FROM openjdk:11-oraclelinux8
COPY --from=Spr ss/target/Catalog-Items-Vmware-FinalTask-0.0.1-SNAPSHOT.jar   ss/jar/finalJar.jar
ENTRYPOINT ["java","-jar","ss/jar/finalJar.jar"]


