-- CreateTable
CREATE TABLE "RelationObjectType" (
    "id" SERIAL NOT NULL,
    "relationTypeId" INTEGER,
    "sourceTypeId" INTEGER,
    "targetTypeId" INTEGER,

    CONSTRAINT "RelationObjectType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelationType" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "RelationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelationObject" (
    "id" SERIAL NOT NULL,
    "relationTypeId" INTEGER,
    "entitySourceId" INTEGER,
    "entityTargetId" INTEGER,

    CONSTRAINT "RelationObject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RelationObjectType" ADD CONSTRAINT "RelationObjectType_relationTypeId_fkey" FOREIGN KEY ("relationTypeId") REFERENCES "RelationType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelationObjectType" ADD CONSTRAINT "RelationObjectType_sourceTypeId_fkey" FOREIGN KEY ("sourceTypeId") REFERENCES "ObjectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelationObjectType" ADD CONSTRAINT "RelationObjectType_targetTypeId_fkey" FOREIGN KEY ("targetTypeId") REFERENCES "ObjectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelationObject" ADD CONSTRAINT "RelationObject_relationTypeId_fkey" FOREIGN KEY ("relationTypeId") REFERENCES "RelationType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelationObject" ADD CONSTRAINT "RelationObject_entitySourceId_fkey" FOREIGN KEY ("entitySourceId") REFERENCES "EntityObject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelationObject" ADD CONSTRAINT "RelationObject_entityTargetId_fkey" FOREIGN KEY ("entityTargetId") REFERENCES "EntityObject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
