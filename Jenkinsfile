pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'docker/ci'
        }
    }
    stages {
        stage ('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Build Code') {
            steps {
                sh 'npm build'
            }
        }
    }
}