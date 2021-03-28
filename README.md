# cookie-cutter template

This is my [cookiecutter](https://cookiecutter.readthedocs.io/) template that I use to
initialize new projects. The following templates exist for different kind of projects:

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

5. rust

   This will setup a rust project, with PostgreSQL and vagrant support.

   ```bash
   cookiecutter gh:IgnisDa/project-cookiecutter --directory="rust"
   ```

## How the scripts work

All these project templates support [vagrant](https://www.vagrantup.com/) based
development, and the associated scripts are stored in the `<<project>>/tools` directory.

1. `tools/shell/env-vars`: This sets up some environment variables that are essential to
   the project. For example, a `DJANGO_SECRET_KEY`, or a `CHOKIDAR_USEPOLLING` variable to
   ensure that hot-reload works in the javascript projects correctly. This script is
   present in all the project templates and run by vagrant during first provision.
2. `tools/Vagrant/bootstrap`: This installs some packages that are essential to the project
   being developed. For example, this means `nodejs` for `NuxtJS` projects, `python3` and
   `PostgreSQL` for `Django` projects etc. This script is present in all the project
   templates and run by vagrant during first provision.
3. `tools/Vagrant/setup-deps`: This script usually setup some non trivial dependencies,
   like git credentials, and the project dependencies, for example `node_modules` and then
   caches them for performance boosts. This script is present in all the project
   templates and run by vagrant during first provision.
4. `tools/run-dev`: This script is used to run the development servers of the web
   development focused projects. Not present in rust project template.
