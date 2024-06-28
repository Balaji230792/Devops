resource "aws_instance" "terra-inst" {
  ami                    = var.AMIS[var.REGION]
  instance_type          = "t2.micro"
  availability_zone      = var.AZ[var.REGION]
  key_name               = "terraKP"
  vpc_security_group_ids = ["sg-056c3160d1b1ce804"]
  tags = {
    Name    = "Terraform-instance"
    Project = "Starlink"
  }
}