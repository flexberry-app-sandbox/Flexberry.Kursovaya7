docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya7/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovaya7/app ../..
