import { PageHeader } from "@/components/dashboard/page-header"
import { TripsTable } from "./_components/table"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
  title: "Trips | Dashboard",
  description: "Manage available Trips and control actions & filter."
}

export default async function TripsPage() {
  const t = await getTranslations()

  return (
    <div className='p-6'>
      <PageHeader title={t("trips")} description={t("tripsDescription")} />
      <TripsTable />
    </div>
  )
}
