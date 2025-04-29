-- CreateTable
CREATE TABLE "Farmer" (
    "farmerID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "namePrefix" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "identityNumber" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "houseNo" TEXT NOT NULL,
    "villageName" TEXT NOT NULL,
    "moo" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "alley" TEXT NOT NULL,
    "subDistrict" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("farmerID")
);

-- CreateTable
CREATE TABLE "Auditor" (
    "auditorID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "namePrefix" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Auditor_pkey" PRIMARY KEY ("auditorID")
);

-- CreateTable
CREATE TABLE "Committee" (
    "committeeID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "namePrefix" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Committee_pkey" PRIMARY KEY ("committeeID")
);

-- CreateTable
CREATE TABLE "Admin" (
    "adminID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "namePrefix" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_userID_key" ON "Farmer"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_identityNumber_key" ON "Farmer"("identityNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Auditor_userID_key" ON "Auditor"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Committee_userID_key" ON "Committee"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userID_key" ON "Admin"("userID");

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auditor" ADD CONSTRAINT "Auditor_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Committee" ADD CONSTRAINT "Committee_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
