# cookie-cutter template

This is my cookiecutter template that I use to initialize new projects. The following
templates exist for different kind of projects:

1. django-nuxt-docusaurus

   This has sets up a fullstack application, with a django backend, nuxtjs frontend and
   a docusaurus documentation. The nuxtjs and docusaurus dependencies are managed by yarn
   and the django backend is managed using poetry.

   ```bash
   cookiecutter gh:IgnisDa/project-cookiecutter --directory="django-nuxt-docusaurus"
   ```

2. postgres

   This will setup a PostgreSQL database in a vagrant machine and then forward the
   necessary port to 5432.

   ```bash
   cookiecutter gh:IgnisDa/project-cookiecutter --directory="postgres"
   ```

3. nuxt

   This will setup a NuxtJS project with tailwind CSS support.

   ```bash
   cookiecutter gh:IgnisDa/project-cookiecutter --directory="nuxt"
   ```

4. django

   This will setup a django project with PostgreSQL database support.

   ```bash
   cookiecutter gh:IgnisDa/project-cookiecutter --directory="django"
   ```
