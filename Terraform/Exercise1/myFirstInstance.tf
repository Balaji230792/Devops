provider "aws" {
  region = "us-east-1"
  #access_key = ""
  #secret_key = ""
}

resource "aws_instance" "intro" {
  ami                    = "ami-0e001c9271cf7f3b9"
  instance_type          = "t2.micro"
  availability_zone      = "us-east-1a"
  key_name               = "terraKP"
  vpc_security_group_ids = ["sg-056c3160d1b1ce804"]
  tags = {
    Name    = "Terraform-instance"
    Project = "First EC2 instance"
  }
}