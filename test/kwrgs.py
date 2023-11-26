
def test (a: str, *args) -> str:
  return args

print(test(1,"eis",1,1,3,57))