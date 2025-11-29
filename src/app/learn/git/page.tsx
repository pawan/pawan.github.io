export default function GitPage() {
    return (
        <div>
            <h1>Git Commands</h1>
            <div className="mb-1"><b>git-init</b> - Create an empty Git repository</div>
            <div className="mb-1"><b>git clone https://github.com/pawan/pawan.github.io.git</b> - Clone an existing Git repository</div>
            <p className="mb-1"><b>git clone --branch main https://github.com/pawan/pawan.github.io.git</b> - Clone an existing Git repository only a specific branch</p>
            <p className="mb-1"><b>git status</b> - Check the status of your files in the working directory and staging area</p>
            <p className="mb-1"><b>git add .</b> - Stage all changes in the working directory for the next commit</p>
            <p className="mb-1"><b>git add path/to/file</b> - Stage a specific file in the working directory for the next commit</p>
            <p className="mb-1"><b>git commit -m &quot;Your commit message&quot;</b> - Commit the staged changes to the repository with a descriptive message</p>
            <p className="mb-1"><b>git push origin main</b> - Push your local commits to the remote repository on the main branch</p>
            <p className="mb-1"><b>git pull origin main</b> - Fetch and merge changes from the remote repository to your local repository on the main branch</p>
            <p className="mb-1"><b>git branch</b> - List all branches in the repository</p>
            <p className="mb-1"><b>git checkout -b new-branch</b> - Create and switch to a new branch named &quot;new-branch&quot;</p>
            <p className="mb-1"><b>git merge new-branch</b> - Merge the changes from &quot;new-branch&quot; into the current branch</p>
            <p className="mb-1"><b>git log</b> - View the commit history of the repository</p>
            <p className="mb-1"><b>git remote -v</b> - List the remote repositories associated with your local repository</p>
            <p className="mb-1"><b>git fetch</b> - Download objects and refs from another repository</p>
            <p className="mb-1"><b>git reset --hard HEAD~1</b> - Undo the last commit and discard changes in the working directory</p>
            <p className="mb-1"><b>git checkout feature -- path/to/file</b> - Checkout a specific file from the &quot;feature&quot; branch</p>
        </div>
    );
}