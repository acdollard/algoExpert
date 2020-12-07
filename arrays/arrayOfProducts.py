# brute force method: O(n^2) time | O(n) space
# def arrayOfProducts(array):
#     products = [1 for _ in range(len(Array))]

#     for i in range(len(array)):
#         runningProduct = 1
#         for j in range(len(array))
#             if i != j:
#                 runningProduct *= array[j]
#         products[i] = runningProduct
    
#     return products




# optimal solution:  O(n) time | O(n) space
# def arrayOfProducts(array):
#     products = [1 for _ in range(len(Array))]
#     leftProducts = [1 for _ in range(len(Array))]
#     rightProducts = [1 for _ in range(len(Array))]
 
#     leftRunningProduct = 1
#     for i in range(len(array)):
#         leftProducts[i] = leftRunningProduct
#         leftRunningProduct *= array[i]

#     rightRunningProduct = 1
#     for i in reversed(range(len(array))):
#         rightProducts[i] = rightRunningProduct
#         rightRunningProduct *= array[i]

#     for i in range(len(array)):
#         product[i] = leftProducts[i] * rightProducts[i]
    
#     return products



# even more optimal: O(n) time | O(n) space
    def arrayOfProducts(array):
    products = [1 for _ in range(len(Array))]

    leftRunningProduct = 1
    for i in range(len(array)):
        leftProducts[i] = leftRunningProduct
        leftRunningProduct *= array[i]

    rightRunningProduct = 1
    for i in reversed(range(len(array))):
        rightProducts[i] *= rightRunningProduct
        rightRunningProduct *= array[i]

    return products

            