# CovIA REST API

This is the Flask based back-end of the CovIA project.

## Installing and running the project locally

1.  You need **Python 3.6** to develop and run the project. Beware, you must not use a more recent version, since the production server is running Ubuntu 18.04, on which Python 3.6 is the latest version. Consider using [pyenv](https://github.com/pyenv/pyenv) to handle multiple Python versions on your system.

1.  We use [Poetry](https://python-poetry.org/docs/) as the dependency management and configuration tool for the project. Once Poetry is installed and available from the command line on your system, you can simply run the following commands to automatically create a new virtual environment and install all the dependencies :


    ```shell
    $ cd back-app   # make sure you are in the correct directory
    $ poetry install
    ```

    **Do not** install, remove or update dependencies directly using `pip`, as the _pyproject.toml_ file wouldn't be updated, and the other developers wouldn't be informed that a new dependency has been added.

1.  Some extra development tools we use :


    -   [black](https://github.com/psf/black) (formatter)
    -   [flake8](https://flake8.pycqa.org/en/latest/) (linter)
    -   [mypy](https://github.com/python/mypy) (static typechecker)
    -   [isort](https://readthedocs.org/projects/isort/) (import sorter)

    All these should be automatically installed as dev-dependencies when running `poetry install`. Make sure to activate the relevant settings in your editor/IDE so that the warnings/errors appear visually (e.g. via the Python extension's configuration in VSCode).

1.  Make sure you have [sqlite3](https://www.sqlite.org/index.html) installed on your system.

1.  Create a _config.py_ file from the _config.py.template_ example provided in _back-app/covia_flask/_.

1.  You can then run the development server locally by running the _run-dev.sh_ script :

```shell
$ chmod 777 run-dev.sh  # only do this the first time
$ ./run-dev.sh
```

## Deploying the project to production

_To be completed_
