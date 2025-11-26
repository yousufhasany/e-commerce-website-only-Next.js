import { auth } from "@/auth"
import { redirect } from "next/navigation"
import ManageProductsTable from "@/components/ManageProductsTable"

export default async function ManageProductsPage() {
  const session = await auth()
  
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Manage Products</h1>
            <p className="mt-2 text-gray-600">View, edit, and delete your products</p>
          </div>
        </div>
        
        <ManageProductsTable />
      </div>
    </div>
  )
}
