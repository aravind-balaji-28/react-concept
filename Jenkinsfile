node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build React app') {
        // Windows uses "bat" instead of "sh"
        bat 'npm install'
        bat 'npm run build'
    }

    stage('Build Docker image') {
        // Use normal docker CLI from Windows
        bat 'docker build -t aravindbalaji28/react-concept .'
    }

    stage('Test image') {
        // Simple test
        bat 'echo Tests passed'
    }

    stage('Push image') {
        // Login + push using Windows commands
        withCredentials([
            usernamePassword(
                credentialsId: 'docker-hub-credentials',
                usernameVariable: 'Aravind',
                passwordVariable: 'test@123'
            )
        ]) {
            bat 'echo test@123 | docker login -u aravindbalaji28 --password-stdin'
            bat 'docker push aravindbalaji28/react-concept'
        }
    }
}
