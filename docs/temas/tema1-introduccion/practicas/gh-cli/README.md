# Descripción de la Práctica gh-cli (REST)

## gh alias 

### gh create-repo

Using `gh api` and `gh alias --shell` add to `gh` 
an extension `gh create-repo` that creates the repo inside the given organization:

```
$ gh create-repo tuturepo ULL-ESIT-PL-2021
$ gh repo view ULL-ESIT-PL-2021/tuturepo -w
```

![]({{site.baseurl}}/assets/images/create-repo.png)

Use the GitHub REST API

### gh delete-repo

The same but with delete:

```
$ gh delete-repo tuturepo ULL-ESIT-PL-2021
```

Then, after issuing the command and refreshing the former page we get:

![]({{site.baseurl}}/assets/images/delete-repo.png)


* GitHub API doc for [Delete repository](https://docs.github.com/es/rest/reference/repos#delete-a-repository)

### gh org-list

Escriba un alias que liste todas los nombres y las urls de las organizaciones a las que el usuario pertenece:

```
➜  async-await-crguezl git:(main) gh orgs-list | grep -i 'dmsi'
ULL-ESIT-DMSI-1920
https://api.github.com/orgs/ULL-ESIT-DMSI-1920
ULL-ESIT-DMSI-2021
https://api.github.com/orgs/ULL-ESIT-DMSI-2021
ULL-ESIT-DMSI-2121
https://api.github.com/orgs/ULL-ESIT-DMSI-2121
```

* Busque en la sección de la GH API [Endpoints available for GitHub Apps](https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps) cual puede serle útil
* Recuerde hacer uso de `--paginate``
* Aprenda a usar [jq]({{site.baseurl}}/http://tema1-introduccion/jq.html) para seleccionar los campos del JSON resultante





## Extension

Write and publish a gh extension using preferably Node.JS. Choose your own idea.
Choose the functionality you want to implement.

It may be:

* `gh-repo-delete [org/repo]` that deletes the specified remote repo.
* Another idea: `gh-repo-rename org/reponame newname` changes the name of the repo to `org/newname` . See <https://docs.github.com/en/rest/reference/repos#update-a-repository>
* Rewriting an existing extension in Node.JS. For example [crguezl/gh-clone-org](https://github.com/crguezl/gh-clone-org)
See an example of how to write a gh extension in Node.JS in [crguezl/gh-submodule-add](https://github.com/crguezl/gh-submodule-add)

**Instructions about the  delivery**: 

Create a repo for your extension in a repo `org/gh-my-extension-name`  inside the classroom organization. Add that repo as a `git submodule` to the repo associated to this lab assignment. Just leave the link to the assignment and extensions repos in the campus virtual 


## References

* [Apuntes de gh]({{site.baseurl}}/tema1-introduccion/gh.html)
* GitHub API doc for [Delete repository](https://docs.github.com/es/rest/reference/repos#delete-a-repository)
* See an example of extension at [crguezl/gh-clone-org](https://github.com/crguezl/gh-clone-org)
* GitHub docs for [Creating GitHub CLI extensions](https://docs.github.com/es/github-cli/github-cli/creating-github-cli-extensions)
* Here is a list of repos with the topic `gh-extension`: [gh-extension](https://github.com/topics/gh-extension) list
* [GitHub GraphQL Playground](https://docs.github.com/en/graphql/overview/explorer)
* [An Introduction to GraphQL via the GitHub API](https://www.cloudbees.com/blog/an-introduction-to-graphql-via-the-github-api)  by Derek Haynes


