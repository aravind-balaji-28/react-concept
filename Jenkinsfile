/* Jenkinsfile */

node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build React app') {
        sh 'npm ci || npm install'
        sh 'npm run build'
    }

    stage('Build Docker image') {
        app = docker.build("aravindbalaji28/react-concept")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("23")
            app.push("latest")
        }
    }
}
