const headingStyle = {
    fontWeight: 'inherit',
  };
  const textStyle = "mb-1 rounded-lg p-4 border-2 border-dotted";

export default function GitPage() {
    return (
        <div style={ {...headingStyle, wordWrap: 'break-word'} }>
            <div className="flex items-center justify-center flex-col">
                <h1 className="mt-2 text-5xl tracking-tight sm:text-6xl text-pretty">Git Commands</h1>
            </div>
            
            <p className={textStyle}><b>git-init</b> - Create an empty Git repository</p>
            <p className={textStyle}><b>git clone https://github.com/pawan/pawan.github.io.git</b> - Clone an existing Git repository</p>
            <p className={textStyle}><b>git clone --branch main https://github.com/pawan/pawan.github.io.git</b> - Clone an existing Git repository only a specific branch</p>

            <p className={textStyle}><b>git status</b> - Check the status of your files in the working directory and staging area</p>
            <p className={textStyle}><b>git add .</b> - Stage all changes in the working directory for the next commit</p>
            <p className={textStyle}><b>git add path/to/file</b> - Stage a specific file in the working directory for the next commit</p>
            <p className={textStyle}><b>git commit -m &quot;Your commit message&quot;</b> - Commit the staged changes to the repository with a descriptive message</p>
            <p className={textStyle}><b>git push origin main</b> - Push your local commits to the remote repository on the main branch</p>
            <p className={textStyle}><b>git pull origin main</b> - Fetch and merge changes from the remote repository to your local repository on the main branch</p>
            
            <p className={textStyle}><b>git branch</b> - List all branches in the repository</p>
            <p className={textStyle}><b>git branch -m old_branch new_branch</b> - Rename a branch from `old_branch` to `new_branch`</p>
            <p className={textStyle}><b>git branch -d branch_name</b> - Delete a branch named `branch_name`</p>

            <p className={textStyle}><b>git checkout -b new-branch</b> - Create and switch to a new branch named &quot;new-branch&quot; from current branch</p>
            <p className={textStyle}><b>Git checkout -b new-branch development</b> - Create and switch to a new branch named &quot;new-branch&quot; from &quot;development&quot; branch</p>
            <p className={textStyle}><b>git merge new-branch</b> - Merge the changes from &quot;new-branch&quot; into the current branch</p>
            <p className={textStyle}><b>git merge --squash new-branch</b> - Merge the changes from &quot;new-branch&quot; into the current branch without creating a merge commit</p>
            
            <p className={textStyle}><b>git fetch</b> - Download objects and refs from another repository</p>
            <p className={textStyle}><b>git reset --hard HEAD~1</b> - Undo the last commit and discard changes in the working directory</p>
            <p className={textStyle}><b>git reset --hard origin/master</b> - Reset your local branch to match the remote master branch</p>
            <p className={textStyle}><b>git checkout feature -- path/to/file</b> - Checkout a specific file from the &quot;feature&quot; branch</p>

            <p className={textStyle}><b>git diff</b> - Show changes between commits, commit and working tree, etc.</p>
            <p className={textStyle}><b>git diff fileName</b> - Show changes for a specific file</p>
            <p className={textStyle}><b>git diff feature...development -- fileName</b> - Show changes between the &quot;feature&quot; and &quot;development&quot; branches for a specific file</p>
            <p className={textStyle}><b>git diff --name-only blog...blog-new</b> - Show filename changes between the &quot;blog&quot; and &quot;blog-new&quot; branches</p>

            <p className={textStyle}><b>git log</b> - View the commit history of the repository</p>
            <p className={textStyle}><b>git log --name-only</b> - View the commit history of the repository with filenames</p>
            <p className={textStyle}><b>git log --name-only --after=&quot;2025-11-10&quot;</b> - View the commit history after a specific date</p>
            <p className={textStyle}><b>git log --name-only --pretty=format:</b> - View the commit history only files</p>
            <p className={textStyle}><b>git show commit_hash</b> - View details of a specific commit</p>
            <p className={textStyle}><b>git show --name-only commit_hash</b> - View details of a specific commit with filenames</p>

            <p className={textStyle}><b>git remote -v</b> - List the remote repositories associated with your local repository</p>
            <p className={textStyle}><b>git remote rename old_origin new_origin</b> - Rename a remote from `old_origin` to `new_origin`</p>
            <p className={textStyle}><b>git remote add origin URL/to/git</b> - Add a new remote named `origin`</p>
            
            <p className={textStyle}><b>git stash</b> - Stash your local changes temporarily</p>
            <p className={textStyle}><b>git stash pop</b> - Apply the stashed changes and remove them from the stash list</p>
            <p className={textStyle}><b>git stash push -m &quot;message&quot; path/to/file/for/stash</b> - Stash your local changes with a descriptive message for specific files</p>
            <p className={textStyle}><b>git stash list</b> - List all stashed changes</p>
            <p className={textStyle}><b>git stash apply &quot;&lt;stashIndex&gt;&quot;</b> - Apply a specific stashed change without removing it from the stash list</p>
        </div>
    );
}