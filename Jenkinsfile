pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo "Building the application"
            }
        }
        stage('e2e tests') {
            environment {
                TESTE = credentials('teste')
            }
            steps {
                echo 'npm test'
            }
        }
    }
}