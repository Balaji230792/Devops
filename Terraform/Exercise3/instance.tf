resource "aws_key_pair" "Barista-Key" {
  key_name   = "BaristaKP"
  public_key = file("BaristaKP.pub")
}

resource "aws_instance" "terra-inst" {
  ami                    = var.AMIS[var.REGION]
  instance_type          = "t2.micro"
  availability_zone      = var.AZ[var.REGION]
  key_name               = aws_key_pair.Barista-Key.key_name
  vpc_security_group_ids = ["sg-056c3160d1b1ce804"]
  tags = {
    Name    = "Terraform-instance"
    Project = "Barista"
  }

  provisioner "file" {
    source      = "web.sh"
    destination = "/tmp/web.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod u+x /tmp/web.sh",
      "sudo /tmp/web.sh"
    ]
  }

  connection {
    user        = var.USER
    private_key = file("BaristaKP")
    host        = self.public_ip
  }
}