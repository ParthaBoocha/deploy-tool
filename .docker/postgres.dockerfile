FROM 		postgres:9.6

COPY        ./postgres-config.sql /docker-entrypoint-initdb.d/
