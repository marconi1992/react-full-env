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
        stage ('Publish Code') {
            steps {
                sh 'rsync -azv dist root@167.99.101.105:/srv/react-full-env/dist'
            }
        }
    }
}