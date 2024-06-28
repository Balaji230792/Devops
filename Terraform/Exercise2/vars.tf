variable "REGION" {
  default = "us-east-1"
}

variable "AMIS" {
  type = map(any)
  default = {
    us-east-1 = "ami-01b799c439fd5516a"
    us-east-2 = "ami-07d7e3e669718ab45"
  }
}

variable "AZ" {
  type = map(any)
  default = {
    us-east-1 = "us-east-1a"
    us-east-2 = "us-east-2a"
  }
}