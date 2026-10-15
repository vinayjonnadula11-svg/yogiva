
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vinayjonnadula11-svg/yogiva.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm.cmd install'
            }
        }

        stage('Build Yogiva') {
            steps {
                bat 'npm.cmd run build'
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'yogiva-ec2-key',
                        keyFileVariable: 'EC2_KEY',
                        usernameVariable: 'EC2_USER'
                    )
                ]) {
                    powershell '''
                        $ErrorActionPreference = "Stop"

                        $server = "52.201.255.244"
                        $target = "$($env:EC2_USER)@$server"

                        ssh -i "$env:EC2_KEY" -o StrictHostKeyChecking=yes $target "mkdir -p /home/ec2-user/yogiva-dist"
                        if ($LASTEXITCODE -ne 0) { throw "Could not prepare EC2 directory" }

                        scp -i "$env:EC2_KEY" -o StrictHostKeyChecking=yes -r "dist/." "${target}:/home/ec2-user/yogiva-dist/"
                        if ($LASTEXITCODE -ne 0) { throw "Could not copy Yogiva build files" }

                        ssh -i "$env:EC2_KEY" -o StrictHostKeyChecking=yes $target "sudo cp -r /home/ec2-user/yogiva-dist/. /usr/share/nginx/html/ && sudo restorecon -Rv /usr/share/nginx/html"
                        if ($LASTEXITCODE -ne 0) { throw "Could not publish Yogiva to Nginx" }
                    '''
                }
            }
        }
    }
}
