import { auth } from "@/auth"
import { redirect } from "next/navigation"
import AddProductForm from "@/components/AddProductForm"

export default async function AddProductPage() {
  const session = await auth()
  
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Add New Product</h1>
          <p className="mt-2 text-gray-600">Fill in the details to add a new product to your store</p>
        </div>
        
        <AddProductForm />
      </div>
    </div>
  )
}
