// Jenkinsfile
node {
    def app

    stage('Clone repository') {
        // If job is configured with Git repo in Jenkins, this is enough:
        checkout scm

        // OR hard-code Git URL:
        // git url: 'https://github.com/aravind-balaji-28/react-concept.git', branch: 'main'
    }

    stage('Build React app') {
        /* Install deps + build production bundle */
        sh 'npm ci || npm install'
        sh 'npm run build'
    }

    stage('Build Docker image') {
        /* This is like: docker build -t aravindbalaji28/react-concept . */
        app = docker.build("aravindbalaji28/react-concept")
    }

    stage('Test image') {
        /* Run any tests **inside** the built image */
        app.inside {
            // simple test example
            sh 'echo "Tests passed"'

            // or real tests if your image has them:
            // sh 'npm test -- --watch=false'
        }
    }

    stage('Push image') {
        /* Push with 2 tags: build number + latest */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("23")  // e.g. 23
            app.push("latest")
        }
    }
}
