import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <Link to="/" className="text-xl font-bold">
        Logo
      </Link>
      <div className="flex items-center space-x-4">
        <Input 
          type="search" 
          placeholder="Search..." 
          className="w-64"
        />
        <Button variant="outline">Sign In</Button>
      </div>
    </nav>
  )
}

