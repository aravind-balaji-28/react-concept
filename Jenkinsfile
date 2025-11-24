pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "aravindbalaji/myapp"
        DOCKER_TAG = "latest"
        REGISTRY = "https://index.docker.io/v1/"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/aravind-balaji-28/react-concept.git'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t react-concept:1.0.0 ."
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'aravindbalaji28',
                    passwordVariable: 'Aravind@1128'
                )]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh "docker push react-concept:1.0.0 ."
            }
        }
    }

    post {
        always {
            sh "docker logout"
        }
    }
}
