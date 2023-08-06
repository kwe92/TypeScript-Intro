
from collections import namedtuple

  # from Pragmatic Programmer Illustration figure 3.4


AddProduct = namedtuple('Product',['id','name','order_code'])

productRecord = AddProduct(1001, 'crystal bracelet', 9009)

print(f'\n{productRecord}\n')

