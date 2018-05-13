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
                sh 'npm run build'
            }
        }
        stage ('Publish Code') {
            sshagent (credentials: ['react-server']) {
                sh 'rsync -azv dist 67.99.101.105:/srv/react-full-env/dist'
            }
        }
    }
}